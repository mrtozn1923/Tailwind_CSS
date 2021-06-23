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

> Ayar dosyasında özel ayarlar yapmak için ikinci bir dosya oluşturarak extend işlemi gerçekleştirilebilir. Bunun için `tailwind.config.js` dosyasının adını `tailwind-default.config.js` olarak değiştirin. Yeni boş bir config dosyası oluşturmak için `npx tailwindcss init` komutunu bayraksız olarak çalıştırın. Yeni eklenen dosyanın içeriği boş olacaktır. Burada `extend` kısmında örnek olarak kendi font tanımlamanızı yapabilirsiniz. Bu işleme ait örnek `6-Custom_Fonts` altında verilmiştir. Font ekleme işlemi için `Google Fonts` kullanılmıştır ve `public/index.html` içerisine link etiketi ile eklenmiştir. Dosyadaki ayar işlemi tamamlandıktan sonra `npm run build-css` komutunu çalıştırmayı unutmayın. Bu sayede yeni bir derleme yapılacak ve css dosyası çıkartılacaktır.

`NOT:` Tailwind CSS mobile-first yaklaşımı benimser. Yani kullandığımız sınıflar `XS` cihazlara göre ayarlanmıştır. Diğer cihaz boyutları için üst `breakpoint` noktalarıyla birlikte ilgili sınıfların bildirilmesi gerekmektedir.
-sm:640px
-md:768px
-lg:1024px
-xl:1280px
-2xl:1536px

`Örnek Kullanım:`  
```html
<div class="flex justify-center md:justify-end">
```
Yukarıdaki kod `md` cihazın altındaki çözünürlüklerde `justify-center` kodunu çalıştırırken `md` ve üzeri ekran çözünürlüklerinde `justify-end` kodunu çalıştıracaktır.