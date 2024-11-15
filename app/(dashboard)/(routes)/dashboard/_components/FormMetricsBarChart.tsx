import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function FormMetricsBarChart({ data } : {data: any}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Form Metrics</CardTitle>
        <CardDescription>Showing metrics by form (views, completions, interactions)</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="formName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="views" stackId="a" fill="#82ca9d" />
            <Bar dataKey="completions" stackId="a" fill="#8884d8" />
            <Bar dataKey="interactions" stackId="a" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter>
        <div className="text-sm">Metric comparison by form name.</div>
      </CardFooter>
    </Card>
  );
}
