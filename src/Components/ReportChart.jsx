import React from "react";
import "../Styles/Showreport.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ReportChart({ totalStudents, avgAbsences, avgParticipation, attendancePercentage }) {
  const data = [
    { name: "Students", value: totalStudents },
    { name: "Avg Absences", value: parseFloat(avgAbsences) },
    { name: "Avg Participation", value: parseFloat(avgParticipation) },
    { name: "Attendance %", value: parseFloat(attendancePercentage) },
  ];

  return (
    <div  className="ReportChartContainer ">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#4A90E2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ReportChart;
/*
import React from "react";
import "../Styles/Showreport.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ReportChart({ totalStudents = 0, avgAbsences = 0, avgParticipation = 0, attendancePercentage = 0 }) {
  // Assurez-vous que les valeurs sont des nombres
  const data = [
    { name: "Students", value: Number(totalStudents) },
    { name: "Avg Absences", value: Number(avgAbsences) },
    { name: "Avg Participation", value: Number(avgParticipation) },
    { name: "Attendance %", value: Number(attendancePercentage) },
  ];

  return (
    <div className="ReportChartContainer">
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#4A90E2" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ReportChart;
*/
