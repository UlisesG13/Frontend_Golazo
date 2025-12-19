import React from 'react';
import StatCard from '../molecule/StatCard';

/**
 * ORGANISMO: El grid que contiene las Moléculas 'StatCard'.
 */
const StatsGrid = ({ stats }) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {stats.map((stat) => (
      <StatCard key={stat.title} {...stat} />
    ))}
  </div>
);

export default StatsGrid;