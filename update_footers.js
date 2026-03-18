const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const footerPattern = /<!-- Footer -->\s*<section[\s\S]*?<\/section>/;
const newFooter = `<!-- Footer -->
    <section id="contacto" class="py-24 bg-white text-center px-6 relative overflow-hidden border-t border-zinc-200">
        <div class="relative z-10 max-w-3xl mx-auto">
            <h2 class="text-3xl md:text-5xl font-bold text-zinc-900 mb-8">¿Listo para soltar el control operativo?</h2>

            <a href="contacto.html"
                class="inline-block bg-zinc-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-zinc-800 transition mb-12 shadow-lg">
                Agendar Diagnóstico de 30 Minutos
            </a>

            <div class="flex justify-center gap-8 text-zinc-500 text-xs font-medium">
                <a href="privacidad.html" class="hover:text-zinc-900 transition">Política de Privacidad</a>
                <a href="terminos.html" class="hover:text-zinc-900 transition">Términos de Servicio</a>
            </div>
            <p class="mt-8 text-zinc-400 text-xs">&copy; 2026 FILO. Infraestructura Comercial.</p>
        </div>
    </section>`;

const simpleFooterPattern = /<!-- Footer Simple -->\s*<section[\s\S]*?<\/section>/;
const newSimpleFooter = `<!-- Footer Simple -->
    <section class="py-12 bg-white text-center px-6 border-t border-zinc-200">
        <div class="flex justify-center gap-8 text-zinc-500 text-xs font-medium mb-8">
            <a href="privacidad.html" class="hover:text-zinc-900 transition">Política de Privacidad</a>
            <a href="terminos.html" class="hover:text-zinc-900 transition">Términos de Servicio</a>
        </div>
        <p class="text-zinc-400 text-xs">&copy; 2026 FILO. Infraestructura Comercial.</p>
    </section>`;

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    let changed = false;

    if (footerPattern.test(content)) {
        content = content.replace(footerPattern, newFooter);
        changed = true;
    }

    if (simpleFooterPattern.test(content)) {
        content = content.replace(simpleFooterPattern, newSimpleFooter);
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(f, content);
        console.log("Updated footer in " + f);
    }
});
console.log("Done");
