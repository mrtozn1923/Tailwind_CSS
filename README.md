# TAILWIND CSS - UTILITY FIRST CSS FRAMEWORK

Tailwind CSS `yardımcı sınıflarla` css kodu yazmanıza olanak tanır. Bu sayede HTML tarafını bırakmadan yardımcı sınıflar aracılığıyla tasarımlarınızı gerçekleştirebilirsiniz. Ayrıca kullanmadığınız sınıflarda `production` ortamında elenir ve daha az kod içeren css dosyalarına sahip olursunuz.

[Tailwind CSS Resmi Sitesi](https://tailwindcss.com/)

[Tailwind CSS Dokümantasyon](https://tailwindcss.com/docs)

Bu repo içerisinde öğrenirken oluşturduğum dosyalara yer veriyorum.

## Kurulum ve Çalıştırma
1. Bilgisayarınızda `NodeJS` ve `NPM` yüklü olmalıdır. Yükleme işlemlerinden sonra `npm install` komutunu kullanın. Bu komut `package.json` dosyasını inceleyerek yüklenmesi gereken paketleri yükleyecektir. 
2. `src` klasöründeki `style.css` dosyasında üç parça olarak `tailwind css` eklenmiştir.
3. `package.json` içerisinde bir `npm script` bulunmaktadır. Bu script'i kullanabilmek için `npm run build-css` komutunu kullanmanız yeterli olacaktır.
4. `public` klasörünü incelediğinizde `tailwind css` kodlarının `style.css` dosyasına çıkartıldığını göreceksiniz.

> Taildwind için yapılandırma dosyası bildirerek özel tanımlamalar yapabilirsiniz. Bu işlem için `npx tailwindcss init --full` komutunu kullanabilirsiniz. Bu sayede `tailwind.config.js` adında varsayılan tanımlamaları içeren dosya ana çalışma dizinimize oluşturulacaktır. Burada değiştirmek istediğiniz varsayılan değerleri değiştirebilirsiniz.