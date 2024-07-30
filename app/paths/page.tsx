"use client";
import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const Paths = () => {
  const data = [
    { skill: 'NETWORKING', percentage: 100 },
    { skill: 'CLOUD', percentage: 10 },
    { skill: 'SECURITY', percentage: 50 },
    { skill: 'DATABASE', percentage: 60 },
    { skill: 'PROGRAMMING', percentage: 80 },
    { skill: 'DEVOPS', percentage: 30 },
    { skill: 'DATA SCIENCE', percentage: 40 },
    { skill: 'WEB DEV', percentage: 70 },
  ];

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
                 className='w-[50px] text-center' />
                 %
                </div>
            </div>
        ))}
        <div className='flex justify-center bg-[#F9F6F2] p-4'>
                Add new skill (TO ALL DEFAULT 0%)
            </div>

      </div>

    </section>
  );
}

export default Paths;
