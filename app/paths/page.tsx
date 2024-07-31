"use client";
import React, { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const Paths = () => {
  const [skill, setSkill] = useState('');
  // const [data, setData] = useState([]);

  const placeholdername = "albin";

  const data = [
    { skill: 'HTML', percentage: 90 },
    { skill: 'CSS', percentage: 80 },
    { skill: 'JavaScript', percentage: 70 },
    { skill: 'React', percentage: 60 },
    { skill: 'Node', percentage: 50 },
    { skill: 'MongoDB', percentage: 40 },
    { skill: 'Express', percentage: 30 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/skills/getSkills?name=' + placeholdername);
      const data = await res.json();
      // setData(data);
      console.log(data);
    };

    fetchData();
  }, []);

  const createSkill = async () => {
    const res = await fetch('/api/skills/addSkill', {
      method: 'POST',
      body: JSON.stringify({ skill }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      console.log('Skill added');
    } else {
      console.error('Error adding skill');
    }
  };
  
  return (
    <section className='min-h-screen flex flex-col text-black items-center p-4'>
      <label htmlFor="paths" className='self-start'>Path</label>
      <select name="paths" id="paths" className='p-2 max-w-[200px] self-start'>
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
        series={[
          {
            dataKey: 'percentage',
            color: 'white',
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
        {data.map(({ skill, percentage }) => (
            <div key={skill} className='flex justify-between bg-[#F9F6F2] p-4'>
                <span>{skill}</span>
                <div>
                <input type="text" value={percentage}
                 className='w-[50px] text-center'
                 onChange={(e) => console.log(e.target.value)}
                 />
                 %
                </div>
            </div>
        ))}
        <div
        className='flex justify-between bg-[#F9F6F2] p-4' 
        >
          <input type="text" name="" id="" placeholder='skill' className='w-[200px] border-2'
          onChange={(e) => setSkill(e.target.value)}
          />
          <button onClick={createSkill} className='border-2'>submit</button>

        </div>

      </div>

    </section>
  );
}

export default Paths;
