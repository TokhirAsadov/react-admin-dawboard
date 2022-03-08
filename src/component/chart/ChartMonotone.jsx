import React from "react"
import "./ChartMonotone.css"
import {ResponsiveContainer, LineChart, XAxis, YAxis, Line, Tooltip, CartesianGrid} from "recharts";

export default function ChartMonotone({ title, data, dataKey, grid }){

    return(
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="grey"/> {/* dataKey - OX ni belgilaydi( x ning qiymatlari ). stroke - kordetaning chiziq ranggi*/}
                    <YAxis /> {/* OY - o`qi */}
                    <Line type="monotone" dataKey={dataKey} stroke="grey"/>
                    {/* Line - grafik chizadi. dataKey - buyicha tasvirlaydi( y ning qiymatlari )  */}
                    <Tooltip /> {/* grafikka hover qilinganida ma'lumotlarni kursatishni taminlaydi */}
                    { grid && <CartesianGrid stroke={"#e0adff"} strokeDasharray="5 5"/> }
                    {"kvadrat katakchalarga bulib beradi, strokeDasharray uzuq uzuq chiziq bilan chizadi kvadratlarni"}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}