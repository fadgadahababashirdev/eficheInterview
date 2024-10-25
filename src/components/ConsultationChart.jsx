'use client';

import { Calendar, TrendingUp } from 'lucide-react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export const description = 'A multiple line chart';

const chartData = [
  { date: '10th', completed: 23, pending: 18 },
  { date: '11th', completed: 23, pending: 18 },
  { date: '12th', completed: 19, pending: 24 },
  { date: '13th', completed: 24, pending: 26 },
  { date: '14th', completed: 28, pending: 25 },
  { date: '15th', completed: 25, pending: 23 },
  { date: '16th', completed: 18, pending: 30 },
  { date: '17th', completed: 13, pending: 25 },
  { date: '18th', completed: 13, pending: 25 },
];

const chartConfig = {
  completed: {
    label: 'completed',
    theme: {
      light: 'hsl(var(--chart-1))',
      dark: 'hsl(var(--chart-1))',
    },
  },
  pending: {
    label: 'pending',
    theme: {
      light: 'hsl(var(--chart-2))',
      dark: 'hsl(var(--chart-2))',
    },
  },
};

export default function ConsultationChart() {
  return (
    <Card className="rounded-none object-cover shadow-none border-0   ">
      <CardHeader className="">
        <CardTitle >
          <div className="flex justify-between">
          <h2 className="text-xl font-semibold">Consultations</h2> 
          <div className="w-fit p-2  border-[##E9EAEC] border-[1.4px] rounded-lg  flex gap-2 items-center mt-3 ">
              <div>
                <h1 className="text-xs text-black">Last 7 Days</h1>
              </div>
              <div>
                <Calendar className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>
        </CardTitle>
        <CardDescription className="">
          <div className="flex justify-between ">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-xs text-black">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <span className="text-xs text-black">Pending</span>
              </div>
            </div>{' '}
           
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="mb-[rem]">
        <ChartContainer config={chartConfig} className="">
          <LineChart
            data={chartData}
            margin={{
              left: -30,
              right: 1,
              top: 15,
              bottom: 10,
            }}
          >
            <CartesianGrid
              vertical={true}
              horizontal={false}
              stroke="#e5e7eb"
              strokeWidth={1}
              verticalCoordinatesGenerator={(props) => {
                const { width, height, offset } = props;
                const { left, right } = offset;
                const verticalPoints = [];
                const step = (width - left - right) / (chartData.length - 1);

                chartData.forEach((entry, index) => {
                  if (entry.date !== '10th' && entry.date !== '18th') {
                    verticalPoints.push(left + step * index);
                  }
                });

                return verticalPoints;
              }}
            />
            <YAxis
              domain={[10, 40]}
              ticks={[10, 20, 30, 40]}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tick={{ fill: '#666', fontSize: 12 }}
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={20}
              ticks={['11th', '12th', '13th', '14th', '15th', '16th', '17th']}
              tick={{ fill: '#666', fontSize: 12 }}
            />
            <ChartTooltip
              cursor={false}
              content={({ active, payload }) => (
                <ChartTooltipContent active={active} payload={payload} />
              )}
            />
            <Line
              type="monotone"
              dataKey="completed"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="pending"
              type="monotone"
              stroke="#facc15"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
