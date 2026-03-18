// Mobile Menu Logic
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// --- HERO CHAT SIMULATION (Minimalist Dark) ---
const heroChatContainer = document.getElementById('hero-chat-container');
const heroMessages = [
    { text: "Hola, vi su anuncio en Instagram.", type: "user", delay: 800 },
    { text: "¡Hola! 👋 Soy Sofía de FILO. ¿Eres dueño de negocio?", type: "ai", delay: 2000 },
    { text: "Sí, soy el dueño.", type: "user", delay: 3500 },
    { text: "Perfecto. Ayudamos a dueños a automatizar ventas. ¿Te muestro cómo?", type: "ai", delay: 5000 }
];

function createHeroBubble(text, type) {
    const div = document.createElement('div');
    // Minimalist styling for hero chat
    if (type === 'user') {
        div.className = 'self-end bg-indigo-600 text-white rounded-2xl rounded-tr-sm px-4 py-2 text-sm max-w-[85%] animate-fade-in shadow-sm';
    } else {
        div.className = 'hero-chat-ai rounded-2xl rounded-tl-sm px-4 py-2 text-sm max-w-[85%] animate-fade-in';
    }
    div.innerText = text;
    return div;
}

async function playHeroChat() {
    heroChatContainer.innerHTML = '';
    for (let msg of heroMessages) {
        await new Promise(r => setTimeout(r, msg.delay));

        if (msg.type === 'ai') {
            // Typing indicator
            const typing = document.createElement('div');
            typing.className = 'hero-chat-ai rounded-2xl rounded-tl-sm px-3 py-2 w-12 flex items-center justify-center mb-2';
            typing.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
            heroChatContainer.appendChild(typing);
            heroChatContainer.scrollTop = heroChatContainer.scrollHeight;
            await new Promise(r => setTimeout(r, 1000));
            heroChatContainer.removeChild(typing);
        }

        heroChatContainer.appendChild(createHeroBubble(msg.text, msg.type));
        heroChatContainer.scrollTop = heroChatContainer.scrollHeight;
    }
    setTimeout(playHeroChat, 4000);
}
playHeroChat();

// --- INTERACTIVE DEMO LOGIC ---
const demoBody = document.getElementById('demo-chat-body');
const quickReplies = document.getElementById('quick-replies');

const sofiaFlow = {
    start: {
        text: "¡Hola! Soy Sofía. ¿Cómo te llamas?",
        options: [
            { label: "Soy Carlos", next: "saludo" },
            { label: "Soy María", next: "saludo" },
            { label: "Anónimo", next: "saludo_anon" }
        ]
    },
    saludo: {
        text: "Mucho gusto. ¿Qué tipo de negocio tienes?",
        options: [
            { label: "Restaurante", next: "pain_delivery" },
            { label: "Inmobiliaria", next: "pain_realty" },
            { label: "Servicios", next: "pain_services" }
        ]
    },
    saludo_anon: {
        text: "Entendido. ¿Qué tipo de negocio manejas?",
        options: [
            { label: "Restaurante", next: "pain_delivery" },
            { label: "Inmobiliaria", next: "pain_realty" },
            { label: "Servicios", next: "pain_services" }
        ]
    },
    pain_delivery: {
        text: "Gastronomía 🍔. ¿Pierdes pedidos por no contestar rápido?",
        options: [
            { label: "Sí, pasa mucho", next: "solution" },
            { label: "A veces", next: "solution" }
        ]
    },
    pain_realty: {
        text: "Inmobiliaria 🏠. ¿Te cuesta filtrar curiosos de compradores reales?",
        options: [
            { label: "Sí, pierdo tiempo", next: "solution" }
        ]
    },
    pain_services: {
        text: "Servicios 🦷. ¿La gente pregunta precio y desaparece?",
        options: [
            { label: "Sí, es frustrante", next: "solution" }
        ]
    },
    solution: {
        text: "Te entiendo. Yo puedo atender a 100 personas a la vez y pasarte solo las ventas listas. ¿Agendamos un diagnóstico?",
        options: [
            { label: "Sí, me interesa", next: "agendar" },
            { label: "Ver precios", next: "precios" }
        ]
    },
    precios: {
        text: "El precio depende de la complejidad, pero el diagnóstico es gratis.",
        options: [
            { label: "Vale, agendemos", next: "agendar" }
        ]
    },
    agendar: {
        text: "¡Genial! 🚀 Te dejo el calendario de mi jefe humano aquí abajo.",
        options: [
            { label: "Ver Calendario", next: "link_calendar" },
            { label: "Reiniciar", next: "start" }
        ]
    },
    link_calendar: {
        text: "🔗 [Abre Calendly] ¡Espero verte pronto!",
        options: [{ label: "Reiniciar Demo", next: "start" }]
    }
};

function addDemoMsg(text, isAi) {
    const div = document.createElement('div');
    div.className = isAi ? 'chat-bubble chat-ai' : 'chat-bubble chat-user';

    if (isAi) {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-bubble chat-ai w-14 flex items-center justify-center';
        typingDiv.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
        demoBody.appendChild(typingDiv);
        demoBody.scrollTop = demoBody.scrollHeight;

        setTimeout(() => {
            if (typingDiv.parentNode) demoBody.removeChild(typingDiv);
            div.innerHTML = text;
            demoBody.appendChild(div);
            demoBody.scrollTop = demoBody.scrollHeight;
        }, 800);
    } else {
        div.innerHTML = text;
        demoBody.appendChild(div);
        demoBody.scrollTop = demoBody.scrollHeight;
    }
}

function showOptions(opts) {
    quickReplies.innerHTML = '';
    setTimeout(() => {
        opts.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = "whitespace-nowrap bg-white text-zinc-800 border border-zinc-300 px-4 py-2 rounded-full text-xs font-semibold hover:bg-zinc-100 transition shadow-sm";
            btn.innerText = opt.label;
            btn.onclick = () => handleChoice(opt);
            quickReplies.appendChild(btn);
        });
    }, 900);
}

function handleChoice(opt) {
    quickReplies.innerHTML = '';
    addDemoMsg(opt.label, false);

    const next = sofiaFlow[opt.next];
    if (next) {
        setTimeout(() => {
            addDemoMsg(next.text, true);
            if (next.options) showOptions(next.options);
        }, 400);
    }
}

function resetDemo() {
    demoBody.innerHTML = '';
    quickReplies.innerHTML = '';
    addDemoMsg(sofiaFlow.start.text, true);
    showOptions(sofiaFlow.start.options);
}

setTimeout(resetDemo, 1000);
