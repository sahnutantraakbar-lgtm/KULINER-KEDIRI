document.addEventListener('DOMContentLoaded', function() {
    // 1. Fungsionalitas Tombol "Lihat Kuliner Populer"
    const tombolJelajahi = document.getElementById('tombolJelajahi');
    const bagianPopuler = document.getElementById('populer'); // ID di HTML direvisi menjadi 'populer'

    tombolJelajahi.addEventListener('click', function() {
        // Scroll halus ke bagian Makanan Populer
        bagianPopuler.scrollIntoView({ behavior: 'smooth' });
    }); 



    // 3. Fungsionalitas Form Kontak (Contoh pencegahan reload)
    const form = document.querySelector('.kontak-section form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah reload halaman
            alert('Terima kasih atas saran Anda! Pesan telah terkirim (simulasi).');
            form.reset();
        });
    }
});
