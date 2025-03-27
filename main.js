const ota = document.querySelector("#wrapper");
console.log(ota);

async function renderUser(url) {
    try {
        const vada = await fetch(url);
        const vadaKeldi = await vada.json();
        
        vadaKeldi.results.forEach(objektlar => {
            ota.innerHTML = `
                <div class="w-[400px] bg-gray-600 border p-[20px]">
                    <h1>${objektlar.name.title} ${objektlar.name.first} ${objektlar.name.last}</h1>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    } finally {
        console.log('Finally block executed');
    }
}

renderUser("https://randomuser.me/api/");
