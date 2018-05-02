$(function () {
   //Function get a number between 0 - 256
   function randomNumber() {
      return Math.floor(Math.random() * 256);
   }
   
   //Function to create a rgb color
   function randomColour() {
      return 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + ')';
   }

   //Function to convert hex format to a rgb color
   function rgb2hex(rgb) {
      rgb = rgb.match(/^rgb?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      return (rgb && rgb.length === 4) ? "#" +
         ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
         ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
         ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
   }
});