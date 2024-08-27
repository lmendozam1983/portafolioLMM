$(document).ready(function () {
  // Mostrar #text2 cuando se hace clic en #text1
  $("#text1").mousedown(function () {
    $("#text2").show();
  });

  $("#text1").show(function () {
    $("#text2").hide();
  });

  // Mostrar #text4 cuando se hace clic en #text3
  $("#text3").mousedown(function () {
    $("#text4").show();
  });

  $("#text3").show(function () {
    $("#text4").hide();
  });

  // Mostrar popup con información 
  $('.simple-ajax-popup-align-top').magnificPopup({
    type: 'ajax',
    alignTop: true,
    overflowY: 'scroll' 
  });

  $('.simple-ajax-popup').magnificPopup({
    type: 'ajax'
  });

});
window.onload = function () {
  // Configurar gráfico con CanvasJS
  var chart = new CanvasJS.Chart("chartContainer", {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Lenguajes de Programación"
    },
    legend: {
      cursor: "pointer",
      itemclick: explodePie
    },
    data: [{
      type: "pie",
      showInLegend: true,
      toolTipContent: "{name}: <strong>{y}%</strong>",
      indexLabel: "{name} - {y}%",
      dataPoints: [
        { y: 26, name: "Ruby", exploded: true },
        { y: 20, name: "Python" },
        { y: 5, name: "Javascript" },
        { y: 3, name: "CSS" },
        { y: 7, name: "SQL" },
        { y: 22, name: "HTML?" },
        { y: 17, name: "PHP" }
      ]
    }]
  });
  chart.render();
}

function explodePie(e) {
  if (typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
  } else {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
  }
  e.chart.render();

}

// Cargar imagen (vista previa)
const imageInput = document.getElementById('imageInput');
const previewImage = document.getElementById('previewImage');

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];

  // Verificar que el archivo sea una imagen
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();

    reader.addEventListener('load', (e) => {
      previewImage.src = e.target.result;
    });

    reader.readAsDataURL(file);
  } else {
    alert('Por favor, selecciona un archivo de imagen válido.');
  }
});


