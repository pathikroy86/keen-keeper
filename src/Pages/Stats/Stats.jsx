import React, { useContext } from 'react';
import { FriendContext } from '../../Context/FriendsCollection';
import { Pie, PieChart, Sector, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const PieGradient = (props) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent, index, isActive } = props;
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <>
            <defs>
                <radialGradient
                    id={`fillGradient${index}`}
                    cx={cx}
                    cy={cy}
                    r={outerRadius}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0%" stopColor={COLORS[index % COLORS.length]} stopOpacity={0} />
                    <stop offset="100%" stopColor={COLORS[index % COLORS.length]} stopOpacity={0.8} />
                </radialGradient>
                <radialGradient
                    id={`borderGradient${index}`}
                    cx={cx}
                    cy={cy}
                >
                    <stop offset="0%" stopColor={COLORS[index % COLORS.length]} stopOpacity={0} />
                    <stop offset="100%" stopColor={COLORS[index % COLORS.length]} stopOpacity={0.8} />
                </radialGradient>
                <clipPath id={`clipPath${index}`}>
                    <Sector {...props} />
                </clipPath>
            </defs>
            <Sector
                {...props}
                clipPath={`url(#clipPath${index})`}
                fill={`url(#fillGradient${index})`}
                stroke={`url(#borderGradient${index})`}
                strokeWidth={isActive ? 4 : 0}
            />
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
                fontSize={12}
                fontWeight="bold"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        </>
    );
};

const Stats = () => {
    const { callCount } = useContext(FriendContext);
    let countCall = 0;
    let countText = 0;
    let countVideo = 0;
    for (const count of callCount) {
        if (count === "Call") {
            countCall++;
        }
        else if (count === "Text") {
            countText++;
        }
        else {
            countVideo++;
        }
    }

    const data = [
        { name: 'Calls', value: countCall },
        { name: 'Texts', value: countText },
        { name: 'Videos', value: countVideo }
    ];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
                    <p className="text-sm font-semibold">{`${payload[0].name}: ${payload[0].value}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Freindship Analytics</h1>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-6">By Interaction Type</h2>

                <div className="flex justify-center">
                    <ResponsiveContainer width="100%" height={400} maxWidth={500}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={120}
                                innerRadius={40}
                                fill="#8884d8"
                                dataKey="value"
                                shape={PieGradient}
                                isAnimationActive={true}
                            />
                            <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="flex justify-center mt-6 space-x-6">
                    <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: COLORS[0] }}></div>
                        <span className="text-sm font-medium">Calls: {countCall}</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: COLORS[1] }}></div>
                        <span className="text-sm font-medium">Texts: {countText}</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: COLORS[2] }}></div>
                        <span className="text-sm font-medium">Videos: {countVideo}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats; 