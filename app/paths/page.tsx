"use client";
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

//@ts-expect-error no types for js-cookie
import Cookies from 'js-cookie';

const yourname = Cookies.get('name');

const Paths = () => {
  const [skill, setSkill] = useState('');
  const [data, setData] = useState<any[]>([]);
  const [name, setName] = useState(yourname);

  const fetchData = useCallback(async () => {
    const res = await fetch('/api/skills/getSkills?name=' + name);
    const data = await res.json();
    setData(Array.isArray(data) ? data : []);
  }, [name]);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const createSkill = async () => {
    const res = await fetch('/api/skills/addSkill', {
      method: 'POST',
      body: JSON.stringify({ skill }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (res.ok) {
      toast.success(data.message);
      fetchData();
    } else {
      toast.error(data.message);
      console.error(data.message);
    }
  };

  const handleChangePercentage = async (skill: any, percentage: number) => {
    if (name === yourname) {
      const res = await fetch('/api/skills/changeSkill', {
        method: 'PATCH',
        body: JSON.stringify({ skill, percentage, name }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        console.log('Skill updated');
        fetchData();
      } else {
        console.error('Error updating skill');
      }
    }

  };

  return (
    <section className='min-h-screen flex flex-col text-black items-center p-4'>
      <label htmlFor="paths" className='self-start'>Path</label>
      <select 
        name="paths" 
        id="paths" 
        className='p-2 max-w-[200px] self-start'
        onChange={(e) => {
          setName(e.target.value);
        }
        }
        value={name}
      >
        <option value="oliver">Oliver</option>
        <option value="albin">Albin</option>
        <option value="rafey">Rafey</option>
      </select>
      <BarChart
        dataset={data}
        xAxis={[
            { 
                scaleType: 'band', 
                dataKey: 'skill',
            }]}
            yAxis={[
                {
                    scaleType: 'linear',
                    dataKey: 'percentage',
                    min: 0,
                    max: 100,
                },
            ]}
        series={[
          {
            dataKey: 'percentage',
            color: "white"
          }
        ]}
        height={800}
        width={1000}
        sx={{
          [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
            transform: 'translateX(-10px)'
          },
        }}
      />
      <span className='text-[20px]'>Levels</span>
      <div className='flex flex-col gap-6 w-[1000px]'>
      {data && data.length > 0 ? (
                data.map(({ skill, percentage }) => (
                    <div key={skill} className='flex justify-between bg-[#F9F6F2] p-4'>
                        <span>{skill}</span>
                        <select
                            value={percentage}
                            onChange={(e) => handleChangePercentage(skill, parseInt(e.target.value))}
                        >
                            {/* loop through 0-100 */}
                            {[...Array.from(Array(101).keys())].map((i) => (
                                <option 
                                    key={i} 
                                    value={i}
                                >{i}%</option>
                            ))}
                        </select>
                    </div>
                ))
            ) : (
                <div>No skills found</div>
            )}
        
        <div
        className='flex justify-between bg-[#F9F6F2] p-4' 
        >
          <input type="text" name="" id="" placeholder='skill or delete [skill]' className='w-[200px] border-2'
          onChange={(e) => setSkill(e.target.value)}
          />
          <button onClick={createSkill} className='border-2'>submit</button>

        </div>
      </div>


    </section>
  );
}

export default Paths;
