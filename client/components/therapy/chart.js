import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const ChartLine = () => {
  //const [data, setData] = useState([]);

  useEffect(() => {
    //asyncFetch();
  }, []);

  const data = [
    {
      "name": "Anxietate",
      "year": "5",
      "gdp": 1211346869605.24
    },
    {
      "name": "Anxietate",
      "year": "10",
      "gdp": 1339395718865.3
    },
    {
      "name": "Anxietate",
      "year": "15",
      "gdp": 1470550015081.55
    },
    {
      "name": "Anxietate",
      "year": "20",
      "gdp": 1660287965662.68
    },
    {
      "name": "Anxietate",
      "year": "25",
      "gdp": 1955347004963.27
    },
    {
      "name": "Anxietate",
      "year": "30",
      "gdp": 2285965892360.54
    },
    {
      "name": "Anxietate",
      "year": "35",
      "gdp": 2752131773355.16
    },
    {
      "name": "Anxietate",
      "year": "40",
      "gdp": 3550342425238.25
    },
    {
      "name": "Anxietate",
      "year": "45",
      "gdp": 4594306848763.08
    },
    {
      "name": "Anxietate",
      "year": "50",
      "gdp": 5101702432883.45
    },
    {
      "name": "Anxietate",
      "year": "55",
      "gdp": 6087164527421.24
    },
    {
      "name": "Anxietate",
      "year": "60",
      "gdp": 7551500425597.77
    },
    {
      "name": "Anxietate",
      "year": "65",
      "gdp": 8532230724141.76
    },
    {
      "name": "Anxietate",
      "year": "70",
      "gdp": 9570405758739.79
    },
    {
      "name": "Anxietate",
      "year": "75",
      "gdp": 10438529153237.6
    },
    {
      "name": "Anxietate",
      "year": "80",
      "gdp": 11015542352468.9
    },
    {
      "name": "Anxietate",
      "year": "85",
      "gdp": 11137945669350.6
    },
    {
      "name": "Anxietate",
      "year": "90",
      "gdp": 12143491448186.1
    },
    {
      "name": "Anxietate",
      "year": "95",
      "gdp": 13608151864637.9
    },
    {
      "name": "Inima",
      "year": "5",
      "gdp": 10252345464000
    },
    {
      "name": "Inima",
      "year": "10",
      "gdp": 10581821399000
    },
    {
      "name": "Inima",
      "year": "15",
      "gdp": 10936419054000
    },
    {
      "name": "Inima",
      "year": "20",
      "gdp": 11458243878000
    },
    {
      "name": "Inima",
      "year": "25",
      "gdp": 12213729147000
    },
    {
      "name": "Inima",
      "year": "30",
      "gdp": 13036640229000
    },
    {
      "name": "Inima",
      "year": "35",
      "gdp": 13814611414000
    },
    {
      "name": "Inima",
      "year": "40",
      "gdp": 14451858650000
    },
    {
      "name": "Inima",
      "year": "45",
      "gdp": 14712844084000
    },
    {
      "name": "Inima",
      "year": "50",
      "gdp": 14448933025000
    },
    {
      "name": "Inima",
      "year": "55",
      "gdp": 14992052727000
    },
    {
      "name": "Inima",
      "year": "60",
      "gdp": 15542581104000
    },
    {
      "name": "Inima",
      "year": "65",
      "gdp": 16197007349000
    },
    {
      "name": "Inima",
      "year": "70",
      "gdp": 16784849190000
    },
    {
      "name": "Inima",
      "year": "75",
      "gdp": 17521746534000
    },
    {
      "name": "Inima",
      "year": "80",
      "gdp": 18219297584000
    },
    {
      "name": "Inima",
      "year": "85",
      "gdp": 18707188235000
    },
    {
      "name": "Inima",
      "year": "90",
      "gdp": 19485393853000
    },
    {
      "name": "Inima",
      "year": "95",
      "gdp": 20544343456936.5
    },
    {
      "name": "Nivel Adrenalina",
      "year": "5",
      "gdp": 1657816613708.58
    },
    {
      "name": "Nivel Adrenalina",
      "year": "10",
      "gdp": 1640246149417.01
    },
    {
      "name": "Nivel Adrenalina",
      "year": "15",
      "gdp": 1784473920863.31
    },
    {
      "name": "Nivel Adrenalina",
      "year": "20",
      "gdp": 2053018775510.2
    },
    {
      "name": "Nivel Adrenalina",
      "year": "25",
      "gdp": 2416931526913.22
    },
    {
      "name": "Nivel Adrenalina",
      "year": "30",
      "gdp": 2538680000000
    },
    {
      "name": "Nivel Adrenalina",
      "year": "35",
      "gdp": 2713749770009.2
    },
    {
      "name": "Nivel Adrenalina",
      "year": "40",
      "gdp": 3100882352941.18
    },
    {
      "name": "Nivel Adrenalina",
      "year": "45",
      "gdp": 2922667279411.76
    },
    {
      "name": "Nivel Adrenalina",
      "year": "50",
      "gdp": 2410909799034.12
    },
    {
      "name": "Nivel Adrenalina",
      "year": "55",
      "gdp": 2475244321361.11
    },
    {
      "name": "Nivel Adrenalina",
      "year": "60",
      "gdp": 2659310054646.23
    },
    {
      "name": "Nivel Adrenalina",
      "year": "65",
      "gdp": 2704887678386.72
    },
    {
      "name": "Nivel Adrenalina",
      "year": "70",
      "gdp": 2786022872706.81
    },
    {
      "name": "Nivel Adrenalina",
      "year": "75",
      "gdp": 3063803240208.01
    },
    {
      "name": "Nivel Adrenalina",
      "year": "80",
      "gdp": 2928591002002.51
    },
    {
      "name": "Nivel Adrenalina",
      "year": "85",
      "gdp": 2694283209613.29
    },
    {
      "name": "Nivel Adrenalina",
      "year": "90",
      "gdp": 2666229179958.01
    },
    {
      "name": "Nivel Adrenalina",
      "year": "95",
      "gdp": 2855296731521.96
    }
  ]

  /*
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  */
  const config = {
    data,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
      },
    },
    legend: {
      position: 'top',
    },
    smooth: true,
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: 'path-in',
        duration: 90000,
      },
    },
  };

  //console.log(<Line {...config} />);

  return <Line {...config} />;
};

export default ChartLine;
