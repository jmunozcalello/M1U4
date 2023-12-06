const distancia = prompt ('Ingrese una distancia en metros:','')
if (distancia<=1000){document.write (`Deberás recorrer la distancia (${distancia}m) a pie`)}
else if (distancia<=10000)
{document.write (`Deberás recorrer la distancia (${distancia}m) en bicicleta`)}
else if (distancia<=30000)
{document.write (`Deberás recorrer la distancia (${distancia}m) en colectivo`)}
else if (distancia<=100000)
{document.write (`Deberás recorrer la distancia (${distancia}m) en auto`)}
else if (distancia>100000)
{document.write (`Deberás recorrer la distancia (${distancia}m) en avion`)}