/*const size = 500;//size 500 olacak

const canvas = document.createElement("canvas"); //canvas öğresi oluşturuyoruz
canvas.width = size;
canvas.height = size;
const rad = size * 0.45
const centerX = size /2;
const centerY = size / 2;
document.body.appendChild(canvas); //HTML in gövdesine(body) ekliyorum.
const ctx = canvas.getContext("2d"); //getContext("2d") HTML içinde olan bir çok şekili çizmek için bir çok özelliği ve metodu olan bir gömme
drawCircle(ctx);//ilk çemberi çiziyoruz





//çizme fonksiyonu
function drawCircle(ctx){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = "3" //kenarların kalınlığı
    
    //burada ilk size/2 olan X , ikinci olan Y konumu
    //Daha sonra rad bizim yarıçapımız.
    //Sıfır olan kısım başlangıç değerimiz
    //Math.Pı bize 180 veriyo 2 ile çarpıp bitiş değerimiz olan 360 ı elde ettik
    ctx.arc(centerX, centerY , rad, 0 , Math.PI * 2);
    ctx.stroke(); //çizdirdim

    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";


    for (let i = 1; i <= 12; i++) {
        // Saat numarasının açısını hesapla (radyan cinsinden)
        const angle = (i - 3) * (Math.PI * 2) / 12;

        // Saat numarasının merkez noktasını hesapla
        const x = centerX + Math.cos(angle) * (rad - 30);
        const y = centerY + Math.sin(angle) * (rad - 30);

        // Saat numarasını çiz
        ctx.fillText(i.toString(), x, y);
    }

    //Saati Hareket ettirme/Açı hesabı
    const now = new Date();
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

      // Akrep için açıyı hesapla
      const hourAngle = (Math.PI / 6) * (hour + minute / 60);
      drawHand(hourAngle, rad * 0.5, 6);

      // Yelkovan için açıyı hesapla
      const minuteAngle = (Math.PI / 30) * (minute + second / 60);
      drawHand(minuteAngle, rad * 0.8, 4);

      // Saniye için açıyı hesapla
      const secondAngle = (Math.PI / 30) * second;
      drawHand(secondAngle, rad * 0.9, 2);
   
}


function drawHand(ctx,angle, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(
        centerX + Math.cos(angle - Math.PI / 2) * length,
        centerY + Math.sin(angle - Math.PI / 2) * length
    );
    ctx.stroke();
}


setInterval(() => drawCircle(ctx), 1000);*/

const size = 500; // size 500 olarak ayarladık

const canvas = document.createElement("canvas"); // canvas öğesi oluşturuyoruz
canvas.width = size;
canvas.height = size;
const rad = size * 0.45;
const centerX = size / 2;
const centerY = size / 2;
document.body.appendChild(canvas); // HTML'in gövdesine (body) ekliyorum.
const ctx = canvas.getContext("2d"); // getContext("2d") HTML içinde olan birçok şekli çizmek için bir çok özelliği ve metodu olan bir gömme
drawCircle(ctx); // İlk çemberi çiz

// Çizme fonksiyonu
function drawCircle(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Kanvası temizle
    ctx.beginPath();
    ctx.lineWidth = 3; // Kenarların kalınlığı

    // Çemberi çiz
    //burada ilk size/2 olan X , ikinci olan Y konumu
    //Daha sonra rad bizim yarıçapımız.
    //Sıfır olan kısım başlangıç değerimiz
    //Math.Pı bize 180 veriyo 2 ile çarpıp bitiş değerimiz olan 360 ı elde ettik
    ctx.arc(centerX, centerY, rad, 0, Math.PI * 2);
    ctx.stroke();

    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Saat numaralarını çiz
    for (let i = 1; i <= 12; i++) {
        // Saat numarasının açısını hesapla (radyan cinsinden)
        const angle = (i - 3) * (Math.PI * 2) / 12;

        // Saat numarasının merkez noktasını hesapla
        const x = centerX + Math.cos(angle) * (rad - 30);
        const y = centerY + Math.sin(angle) * (rad - 30);

        // Saat numarasını çiz
        ctx.fillText(i.toString(), x, y);
    }

    // Saati hareket ettirme/açı hesabı
    const now = new Date();
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

    // Akrep için açıyı hesapla
    const hourAngle = (Math.PI / 6) * (hour + minute / 60);
    drawHand(ctx, hourAngle, rad * 0.5, 6);

    // Yelkovan için açıyı hesapla
    const minuteAngle = (Math.PI / 30) * (minute + second / 60);
    drawHand(ctx, minuteAngle, rad * 0.8, 4);

    // Saniye için açıyı hesapla
    const secondAngle = (Math.PI / 30) * second;
    drawHand(ctx, secondAngle, rad * 0.9, 2);
}

// Akrep, yelkovan ve saniye kollarını çizme fonksiyonu
function drawHand(ctx, angle, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(
        centerX + Math.cos(angle - Math.PI / 2) * length,
        centerY + Math.sin(angle - Math.PI / 2) * length
    );
    ctx.stroke();
}

setInterval(() => drawCircle(ctx), 1000); // Her saniyede bir drawCircle fonksiyonunu çağır




