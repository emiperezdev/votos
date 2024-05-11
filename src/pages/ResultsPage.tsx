import React from "react";
import Header from '../components/Header';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import useVotos from "../store/useVotos";
import partidos from "../data/partidos";

const ResultsPage = () => {
  const { votosPartidos } = useVotos(); 

  const partidoNombres = partidos.map(partido => partido.title);
  const votosPorPartido = Object.values(votosPartidos);

  console.log(votosPartidos)

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: partidoNombres,
      labels: {
        rotate: -90,
        style: {
          colors: '#ffffff'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Votos'
      },
      forceNiceScale: true
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + " votos"
        }
      }
    }
  };

  const series = [{
    name: 'Votos',
    data: votosPorPartido
  }];

  return (
    <div>
      <Header to='/' title='Votes Chart' />
      <div className="app ion-margin">
        <div className="row">
          <div className="mixed-chart">
            <ReactApexChart options={options} series={series} type="bar" height={350} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;
