/* ================================================================
   STUDIIT app.js — v5.0 (Neon-Brutalism / Local-First / ES6+)
   ================================================================ */
"use strict";

// --- TRADUCCIONES ---
const TRANSLATIONS = {
  es: {
    "nav.feed": "Inicio",
    "nav.apuntes": "Apuntes",
    "nav.metodos": "Métodos",
    "nav.foro": "Foro",
    "nav.perfil": "Perfil",
    "section.feed.title": "🔥 Trending ahora",
    "section.feed.sub": "Lo más popular de la comunidad",
    "section.apuntes.title": "📚 Banco de Apuntes",
    "section.apuntes.sub": "PDFs compartidos por la comunidad",
    "section.metodos.title": "🧠 Métodos de Estudio",
    "section.metodos.sub": "Técnicas probadas por miles de estudiantes",
    "section.foro.title": "💬 Foro Q&A",
    "section.foro.sub": "Pregunta y resuelve dudas juntos",
    "profile.title": "Mi Perfil",
    "profile.sub": "Estudiante de Studiit",
    "profile.name": "✏️ Mi nombre",
    "profile.color": "🎨 Color de mi avatar",
    "profile.theme": "🌓 Apariencia",
    "profile.lang": "🌍 Idioma",
    "profile.stats": "🏆 Mis logros",
    "profile.achievements": "🥇 Logros Desbloqueados",
    "theme.dark": "Oscuro",
    "theme.light": "Claro",
    "stat.posts": "Publicaciones",
    "stat.votes": "Votos dados",
    "stat.level": "Nivel",
    "toast.lang": "Idioma cambiado a Español",
    "toast.theme": "Tema actualizado",
    "toast.profile_saved": "Nombre guardado correctamente",
    "toast.post_created": "Publicación creada correctamente ⚡",
    "toast.comment_added": "Comentario añadido ✨",
    "toast.vote_registered": "Voto registrado",
    "toast.level_up": "🎉 ¡Felicidades! Has subido al nivel ",
    "pomodoro.title": "Temporizador Pomodoro",
    "pomodoro.work": "Tiempo de Concentración",
    "pomodoro.break": "Tiempo de Descanso",
    "pomodoro.completed": "¡Pomodoro completado! +100 XP 🎯",
    "flashcard.title": "Active Recall Flashcards",
    "flashcard.score": "Evaluación",
    "flashcard.completed": "¡Baraja completada! +50 XP 🧠",
    // Mock Data Translations
    "post.1.titulo": "Active Recall + Spaced Repetition: mi flujo definitivo con plantillas",
    "post.1.contenido": "La clave está en separar la fase de adquisición de la de retención. Aquí comparto el sistema exacto que uso cada semana para mis exámenes.",
    "post.2.titulo": "¿Cómo demuestro que la derivada de e^x es e^x sin usar límites?",
    "post.2.contenido": "Tengo un examen mañana. He visto varias versiones pero ninguna me queda del todo clara. ¿Alguien puede explicarlo usando la función inversa logaritmo?",
    "post.3.titulo": "Resumen de Termodinámica — Todos los ciclos P-V con diagramas (42 pág.)",
    "post.3.contenido": "PDF gratuito con el primer principio, ciclo de Carnot, entropía y mucho más. Ideal para Selectividad o física general de secundaria.",
    "post.4.titulo": "La Técnica Feynman en 4 pasos: aprende cualquier cosa explicándola",
    "post.4.contenido": "Si no puedes explicarlo en palabras simples, no lo entiendes de verdad. Aquí los 4 pasos detallados con un ejemplo práctico de programación.",
    "apunte.a1.titulo": "Termodinámica Completa — Todos los ciclos P-V",
    "apunte.a2.titulo": "Álgebra Lineal — Espacios vectoriales y matrices",
    "apunte.a3.titulo": "Historia Contemporánea — Desde 1900 hasta hoy",
    "apunte.a4.titulo": "Química Orgánica — Nomenclatura IUPAC completa",
    "apunte.a5.titulo": "Cálculo Diferencial — Derivadas y sus aplicaciones",
    "apunte.a6.titulo": "Python desde cero — Programación para estudiantes",
    "foro.q1.titulo": "¿Cómo aprendo a derivar rápidamente sin cometer errores?",
    "foro.q2.titulo": "Recursos gratuitos para empezar Química orgánica desde cero",
    "foro.q3.titulo": "¿Cuál es la diferencia entre energía interna y entalpía?",
    "fc.1.q": "¿Qué establece el primer principio de la termodinámica?",
    "fc.1.a": "Establece que la energía total de un sistema aislado se conserva. La variación de energía interna es igual al calor absorbido menos el trabajo realizado: ΔU = Q - W.",
    "fc.2.q": "¿Cuál es la derivada de e^(3x)?",
    "fc.2.a": "Usando la regla de la cadena, la derivada de e^(3x) es 3 * e^(3x).",
    "fc.3.q": "¿En qué año se inició la Primera Guerra Mundial?",
    "fc.3.a": "La Primera Guerra Mundial se inició en el año 1914 y finalizó en 1918.",
    "fc.4.q": "¿Cuál es el grupo funcional de los alcoholes?",
    "fc.4.a": "El grupo funcional de los alcoholes es el grupo hidroxilo (-OH).",
    "fc.5.q": "¿Qué propone la Curva del Olvido de Ebbinghaus?",
    "fc.5.a": "Propone que tendemos a olvidar la información a una tasa exponencial después de adquirirla, a menos que repasemos activamente (Spaced Repetition) para reforzar la memoria."
  },
  en: {
    "nav.feed": "Home",
    "nav.apuntes": "Notes",
    "nav.metodos": "Methods",
    "nav.foro": "Forum",
    "nav.perfil": "Profile",
    "section.feed.title": "🔥 Trending now",
    "section.feed.sub": "Most popular in the community",
    "section.apuntes.title": "📚 Notes Bank",
    "section.apuntes.sub": "PDFs shared by the community",
    "section.metodos.title": "🧠 Study Methods",
    "section.metodos.sub": "Techniques proven by thousands of students",
    "section.foro.title": "💬 Q&A Forum",
    "section.foro.sub": "Ask and solve doubts together",
    "profile.title": "My Profile",
    "profile.sub": "Studiit Student",
    "profile.name": "✏️ My Name",
    "profile.color": "🎨 Avatar Color",
    "profile.theme": "🌓 Appearance",
    "profile.lang": "🌍 Language",
    "profile.stats": "🏆 My Achievements",
    "profile.achievements": "🥇 Unlocked Achievements",
    "theme.dark": "Dark",
    "theme.light": "Light",
    "stat.posts": "Posts",
    "stat.votes": "Votes Cast",
    "stat.level": "Level",
    "toast.lang": "Language changed to English",
    "toast.theme": "Theme updated",
    "toast.profile_saved": "Name saved successfully",
    "toast.post_created": "Post created successfully ⚡",
    "toast.comment_added": "Comment added ✨",
    "toast.vote_registered": "Vote registered",
    "toast.level_up": "🎉 Congratulations! You reached level ",
    "pomodoro.title": "Pomodoro Timer",
    "pomodoro.work": "Focus Time",
    "pomodoro.break": "Break Time",
    "pomodoro.completed": "Pomodoro completed! +100 XP 🎯",
    "flashcard.title": "Active Recall Flashcards",
    "flashcard.score": "Evaluation",
    "flashcard.completed": "Deck completed! +50 XP 🧠",
    // Mock Data Translations
    "post.1.titulo": "Active Recall + Spaced Repetition: my definitive workflow with templates",
    "post.1.contenido": "The key is separating the acquisition phase from the retention phase. Here I share the exact system I use every week for my exams.",
    "post.2.titulo": "How do I prove that the derivative of e^x is e^x without using limits?",
    "post.2.contenido": "I have an exam tomorrow. I've seen several versions but none of them are completely clear. Can someone explain it using the inverse logarithm function?",
    "post.3.titulo": "Thermodynamics Summary — All P-V cycles with diagrams (42 pages)",
    "post.3.contenido": "Free PDF covering the first principle, Carnot cycle, entropy and much more. Ideal for college entrance exams or high school physics.",
    "post.4.titulo": "The Feynman Technique in 4 steps: learn anything by explaining it",
    "post.4.contenido": "If you cannot explain it in simple words, you don't really understand it. Here are the 4 steps detailed with a practical programming example.",
    "apunte.a1.titulo": "Complete Thermodynamics — All P-V cycles",
    "apunte.a2.titulo": "Linear Algebra — Vector spaces and matrices",
    "apunte.a3.titulo": "Contemporary History — From 1900 to today",
    "apunte.a4.titulo": "Organic Chemistry — Complete IUPAC nomenclature",
    "apunte.a5.titulo": "Differential Calculus — Derivatives and applications",
    "apunte.a6.titulo": "Python from Scratch — Programming for students",
    "foro.q1.titulo": "How do I learn to derive quickly without making mistakes?",
    "foro.q2.titulo": "Free resources to start Organic Chemistry from scratch",
    "foro.q3.titulo": "What is the difference between internal energy and enthalpy?",
    "fc.1.q": "What does the first law of thermodynamics state?",
    "fc.1.a": "It states that the total energy of an isolated system is conserved. The change in internal energy is equal to heat absorbed minus work done: ΔU = Q - W.",
    "fc.2.q": "What is the derivative of e^(3x)?",
    "fc.2.a": "Using the chain rule, the derivative of e^(3x) is 3 * e^(3x).",
    "fc.3.q": "In which year did World War I begin?",
    "fc.3.a": "World War I began in 1914 and ended in 1918.",
    "fc.4.q": "What is the functional group of alcohols?",
    "fc.4.a": "The functional group of alcohols is the hydroxyl group (-OH).",
    "fc.5.q": "What does Ebbinghaus' Forgetting Curve propose?",
    "fc.5.a": "It proposes that we tend to forget information at an exponential rate after acquiring it, unless we actively review it (Spaced Repetition) to reinforce memory."
  },
  fr: {
    "nav.feed": "Accueil",
    "nav.apuntes": "Notes",
    "nav.metodos": "Méthodes",
    "nav.foro": "Forum",
    "nav.perfil": "Profil",
    "section.feed.title": "🔥 Tendances",
    "section.feed.sub": "Le plus populaire de la communauté",
    "section.apuntes.title": "📚 Banque de Notes",
    "section.apuntes.sub": "PDFs partagés par la communauté",
    "section.metodos.title": "🧠 Méthodes d'étude",
    "section.metodos.sub": "Techniques éprouvées par des milliers d'étudiants",
    "section.foro.title": "💬 Forum Q&A",
    "section.foro.sub": "Posez des questions et résolvez des doutes ensemble",
    "profile.title": "Mon Profil",
    "profile.sub": "Étudiant de Studiit",
    "profile.name": "✏️ Mon Nom",
    "profile.color": "🎨 Couleur de l'avatar",
    "profile.theme": "🌓 Apparence",
    "profile.lang": "🌍 Langue",
    "profile.stats": "🏆 Mes Stats",
    "profile.achievements": "🥇 Badges Débloqués",
    "theme.dark": "Sombre",
    "theme.light": "Clair",
    "stat.posts": "Publications",
    "stat.votes": "Votes Donnés",
    "stat.level": "Niveau",
    "toast.lang": "Langue changée en Français",
    "toast.theme": "Thème mis à jour",
    "toast.profile_saved": "Nom enregistré avec succès",
    "toast.post_created": "Publication créée avec succès ⚡",
    "toast.comment_added": "Commentaire ajouté ✨",
    "toast.vote_registered": "Vote enregistré",
    "toast.level_up": "🎉 Félicitations! Vous êtes passé au niveau ",
    "pomodoro.title": "Minuteur Pomodoro",
    "pomodoro.work": "Temps de Concentration",
    "pomodoro.break": "Temps de Pause",
    "pomodoro.completed": "Pomodoro terminé! +100 XP 🎯",
    "flashcard.title": "Active Recall Flashcards",
    "flashcard.score": "Évaluation",
    "flashcard.completed": "Jeu terminé! +50 XP 🧠",
    // Mock Data Translations
    "post.1.titulo": "Après 2 ans de Récupération Active + Répétition Espacée: mon flux de travail définitif",
    "post.1.contenido": "La clé est de séparer la phase d'acquisition de la phase de rétention. Je partage ici le système exact que j'utilise chaque semaine pour mes examens.",
    "post.2.titulo": "Comment prouver que la dérivée de e^x est e^x sans utiliser de limites?",
    "post.2.contenido": "J'ai un examen demain. J'ai vu plusieurs versions mais aucune n'est tout à fait claire. Quelqu'un peut-il l'expliquer en utilisant la fonction logarithme inverse?",
    "post.3.titulo": "Résumé de thermodynamique — Tous les cycles P-V avec schémas (42 pages)",
    "post.3.contenido": "PDF gratuit couvrant le premier principe, le cycle de Carnot, l'entropie et bien plus encore. Idéal pour le baccalauréat ou la physique générale.",
    "post.4.titulo": "La méthode Feynman en 4 étapes: apprenez n'importe quoi en l'expliquant",
    "post.4.contenido": "Si vous ne pouvez pas l'expliquer avec des mots simples, vous ne le comprenez pas vraiment. Voici les 4 étapes détaillées avec un exemple pratique.",
    "apunte.a1.titulo": "Thermodynamique Complète — Tous les cycles P-V",
    "apunte.a2.titulo": "Algèbre Linéaire — Espaces vectoriels et matrices",
    "apunte.a3.titulo": "Histoire Contemporaine — De 1900 à nos jours",
    "apunte.a4.titulo": "Chimie Organique — Nomenclature IUPAC complète",
    "apunte.a5.titulo": "Calcul Différentiel — Dérivées et applications",
    "apunte.a6.titulo": "Python de Zéro — Programmation pour étudiants",
    "foro.q1.titulo": "Comment apprendre à dériver rapidement sans faire d'erreurs ?",
    "foro.q2.titulo": "Ressources gratuites pour commencer la Chimie organique à partir de zéro",
    "foro.q3.titulo": "Quelle est la différence entre énergie interne et enthalpie ?",
    "fc.1.q": "Que stipule le premier principe de la thermodynamique ?",
    "fc.1.a": "Il stipule que l'énergie totale d'un système isolé se conserve. La variation d'énergie interne est égale à la chaleur absorbée moins le travail fourni : ΔU = Q - W.",
    "fc.2.q": "Quelle est la dérivée de e^(3x) ?",
    "fc.2.a": "En utilisant la règle de dérivation des fonctions composées, la dérivée de e^(3x) est 3 * e^(3x).",
    "fc.3.q": "En quelle année la Première Guerre mondiale a-t-elle commencé ?",
    "fc.3.a": "La Première Guerre mondiale a commencé en 1914 et s'est terminée en 1918.",
    "fc.4.q": "Quel est le groupe fonctionnel des alcools ?",
    "fc.4.a": "Le groupe fonctionnel des alcools est le groupe hydroxyle (-OH).",
    "fc.5.q": "Que propose la courbe de l'oubli d'Ebbinghaus ?",
    "fc.5.a": "Elle propose que nous avons tendance à oublier les informations à un rythme exponentiel après les avoir acquises, à moins de les réviser activement (répétition espacée)."
  }
};

// --- MOCK DATA ---
const DEFAULT_POSTS = [
  {
    id: "1",
    titulo: "Active Recall + Spaced Repetition: my definitive workflow with templates",
    contenido: "The key is separating the acquisition phase from the retention phase. Here I share the exact system I use every week for my exams.",
    tag: "Active Recall",
    tipo: "metodo",
    autor: "NeuroBrains",
    initials: "NB",
    color: "violet",
    time: "3 hours ago",
    votes: 847,
    comments: [
      { autor: "MathWizard23", color: "cyan", content: "This is exactly what I needed! I'll try it today.", time: "2 hours ago" },
      { autor: "PhysicsQueen", color: "amber", content: "Great post, the templates are structured really well.", time: "1 hour ago" }
    ]
  },
  {
    id: "2",
    titulo: "How do I prove that the derivative of e^x is e^x without using limits?",
    contenido: "I have an exam tomorrow. I've seen several versions but none of them are completely clear. Can someone explain it using the inverse logarithm function?",
    tag: "Calculus",
    tipo: "pregunta",
    autor: "MathWizard23",
    initials: "MW",
    color: "cyan",
    time: "7 hours ago",
    votes: 312,
    solved: true,
    comments: [
      { autor: "CodeSage", color: "violet", content: "Use the derivative of the inverse function: if y = ln(x), x = e^y. Deriving dy/dx implicitly gives the result directly.", time: "5 hours ago" }
    ]
  },
  {
    id: "3",
    titulo: "Thermodynamics Summary — All P-V cycles with diagrams (42 pages)",
    contenido: "Free PDF covering the first principle, Carnot cycle, entropy and much more. Ideal for college entrance exams or high school physics.",
    tag: "Physics",
    tipo: "apunte",
    autor: "PhysicsQueen",
    initials: "PQ",
    color: "amber",
    time: "1 day ago",
    votes: 589,
    comments: []
  },
  {
    id: "4",
    titulo: "The Feynman Technique in 4 steps: learn anything by explaining it",
    contenido: "If you cannot explain it in simple words, you don't really understand it. Here are the 4 steps detailed with a practical programming example.",
    tag: "Pomodoro",
    tipo: "metodo",
    autor: "CodeSage",
    initials: "CS",
    color: "green",
    time: "2 days ago",
    votes: 201,
    comments: []
  }
];

const DEFAULT_APUNTES = [
  { id: "a1", titulo: "Complete Thermodynamics — All P-V cycles", materia: "Physics", paginas: 42, dl: "2.1k", autor: "PhysicsQueen", col: "amber", ini: "PQ", rating: "4.9", tags: ["Physics", "Free PDF"] },
  { id: "a2", titulo: "Linear Algebra — Vector spaces and matrices", materia: "Mathematics", paginas: 28, dl: "1.4k", autor: "AlgebraKing", col: "violet", ini: "AK", rating: "4.7", tags: ["Mathematics", "Calculus"] },
  { id: "a3", titulo: "Contemporary History — From 1900 to today", materia: "History", paginas: 56, dl: "890", autor: "HistoryPro", col: "cyan", ini: "HP", rating: "4.6", tags: ["History", "Summary"] },
  { id: "a4", titulo: "Organic Chemistry — Complete IUPAC nomenclature", materia: "Chemistry", paginas: 34, dl: "1.2k", autor: "QuimiGuru", col: "cyan", ini: "QG", rating: "4.8", tags: ["Chemistry", "Free PDF"] },
  { id: "a5", titulo: "Differential Calculus — Derivatives and applications", materia: "Calculus", paginas: 60, dl: "3.1k", autor: "NeuroBrains", col: "violet", ini: "NB", rating: "5.0", tags: ["Calculus", "Mathematics"] },
  { id: "a6", titulo: "Python from Scratch — Programming for students", materia: "Programming", paginas: 80, dl: "4.2k", autor: "CodeSage", col: "violet", ini: "CS", rating: "4.9", tags: ["Programming", "Free PDF"] }
];

const STUDY_METHODS = [
  {
    id: "m1",
    nombre: "Active Recall",
    icon: "ri-flashcard-line",
    col: "violet",
    rating: "4.9",
    users: "8.4k",
    tiempo: "30-60 min/session",
    desc: "Active retrieval that improves long-term retention by up to 50% compared to passive re-reading.",
    pasos: ["Study the material once", "Close the book completely", "Write down everything you remember", "Compare and fill in the gaps"],
    tags: ["Memory", "Exam", "Efficiency"],
    action: "flashcards"
  },
  {
    id: "m2",
    nombre: "Pomodoro Technique",
    icon: "ri-timer-line",
    col: "amber",
    rating: "4.7",
    users: "6.1k",
    tiempo: "25+5 min cycles",
    desc: "Manage your time by breaking work into 25-minute blocks followed by 5-minute breaks.",
    pasos: ["Choose a specific task", "Work 25 min without interruptions", "Take an active 5-minute break", "Every 4 pomodoros: long break"],
    tags: ["Productivity", "Focus", "Time"],
    action: "pomodoro"
  }
];

const DEFAULT_FORO = [
  { id: "q1", titulo: "How do I learn to derive quickly without making mistakes?", resp: 24, vistas: "1.2k", resuelto: true, autor: "MathStudent", col: "violet", ini: "MS", time: "2h ago", tags: ["Calculus", "Derivatives"], comments: [] },
  { id: "q2", titulo: "Free resources to start Organic Chemistry from scratch", resp: 18, vistas: "890", resuelto: false, autor: "ChemBeginner", col: "cyan", ini: "CB", time: "4h ago", tags: ["Chemistry", "Resources"], comments: [] },
  { id: "q3", titulo: "What is the difference between internal energy and enthalpy?", resp: 31, vistas: "2.1k", resuelto: true, autor: "PhysicsFan", col: "amber", ini: "PF", time: "6h ago", tags: ["Physics", "Thermodynamics"], comments: [] }
];

const MOCK_FLASHCARDS = [
  { materia: "Physics", question: "What does the first law of thermodynamics state?", answer: "It states that the total energy of an isolated system is conserved. The change in internal energy is equal to heat absorbed minus work done: ΔU = Q - W." },
  { materia: "Calculus", question: "What is the derivative of e^(3x)?", answer: "Using the chain rule, the derivative of e^(3x) is 3 * e^(3x)." },
  { materia: "History", question: "In which year did World War I begin?", answer: "World War I began in 1914 and ended in 1918." },
  { materia: "Chemistry", question: "What is the functional group of alcohols?", answer: "The functional group of alcohols is the hydroxyl group (-OH)." },
  { materia: "General", question: "What does Ebbinghaus' Forgetting Curve propose?", answer: "It proposes that we tend to forget information at an exponential rate after acquiring it, unless we actively review it (Spaced Repetition) to reinforce memory." }
];

const ALL_ACHIEVEMENTS = [
  { id: "first-vote", title: "First Vote 🗳️", desc: "Cast your first upvote or downvote.", condition: store => store.state.profile.voteCount > 0 },
  { id: "first-post", title: "Studiit Creator ✍️", desc: "Create your first post on the platform.", condition: store => store.state.profile.postCount > 0 },
  { id: "first-comment", title: "Community Voice 💬", desc: "Add a comment on any post.", condition: store => store.state.profile.commentCount > 0 },
  { id: "pomodoro-master", title: "Mind of Steel ⏱️", desc: "Complete your first Pomodoro timer.", condition: store => store.state.profile.pomodoroCount > 0 },
  { id: "flashcard-master", title: "Elephant Memory 🧠", desc: "Complete a full deck of Active Recall flashcards.", condition: store => store.state.profile.flashcardsCompleted > 0 }
];

// --- GESTOR DE ESTADO LOCAL (AppStore) ---
class AppStore {
  constructor() {
    this.storageKey = "studiit_state_v5";
    this.state = this.loadState();
  }

  loadState() {
    try {
      const data = localStorage.getItem(this.storageKey);
      if (data) {
        const parsed = JSON.parse(data);
        if (!parsed.posts || !Array.isArray(parsed.posts)) parsed.posts = DEFAULT_POSTS;
        if (!parsed.apuntes || !Array.isArray(parsed.apuntes)) parsed.apuntes = DEFAULT_APUNTES;
        if (!parsed.foro || !Array.isArray(parsed.foro)) parsed.foro = DEFAULT_FORO;
        if (!parsed.votedPosts) parsed.votedPosts = {};
        if (!parsed.profile) parsed.profile = this.getDefaultState().profile;
        return parsed;
      }
    } catch (e) {
      console.error("Error loading localStorage", e);
    }
    return this.getDefaultState();
  }

  getDefaultState() {
    return {
      profile: {
        username: "Student",
        color: "violet",
        postCount: 1,
        voteCount: 0,
        commentCount: 0,
        pomodoroCount: 0,
        flashcardsCompleted: 0,
        level: 1,
        xp: 0,
        achievements: [] // IDs of unlocked achievements
      },
      posts: DEFAULT_POSTS,
      apuntes: DEFAULT_APUNTES,
      foro: DEFAULT_FORO,
      votedPosts: {}, // postId -> "up" | "down"
      lang: "en",
      theme: "dark"
    };
  }

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (e) {
      console.warn("localStorage quota exceeded, saving lightweight state without large file dataUrls...", e);
      try {
        const safeState = JSON.parse(JSON.stringify(this.state));
        if (safeState.apuntes) {
          safeState.apuntes.forEach(a => {
            if (a.fileData && a.fileData.dataUrl && a.fileData.dataUrl.length > 50000) {
              a.fileData.dataUrl = "";
            }
          });
        }
        localStorage.setItem(this.storageKey, JSON.stringify(safeState));
      } catch (err2) {
        console.error("Critical error saving localStorage state", err2);
      }
    }
  }

  addXp(amount) {
    const prevLevel = this.state.profile.level;
    this.state.profile.xp += amount;
    // Nivel = Math.floor(XP / 100) + 1
    const newLevel = Math.floor(this.state.profile.xp / 100) + 1;
    if (newLevel > prevLevel) {
      this.state.profile.level = newLevel;
      setTimeout(() => {
        showToast(`${TRANSLATIONS[this.state.lang]["toast.level_up"]}${newLevel}! 🎉`, "ok");
      }, 500);
    }
    this.save();
    this.updateProfileUi();
  }

  checkAchievements() {
    ALL_ACHIEVEMENTS.forEach(ach => {
      if (!this.state.profile.achievements.includes(ach.id) && ach.condition(this)) {
        this.state.profile.achievements.push(ach.id);
        this.addXp(50); // 50 XP bonus for achievement
        showToast(`🏆 Achievement Unlocked: ${ach.title}`, "ok");
        this.save();
        this.updateProfileUi();
      }
    });
  }

  updateProfileUi() {
    const levelEl = document.getElementById("stat-level");
    const postsEl = document.getElementById("stat-posts");
    const votesEl = document.getElementById("stat-votes");
    const xpProgress = document.getElementById("profile-xp-progress");
    const xpCurrent = document.getElementById("profile-xp-current");
    const xpNext = document.getElementById("profile-xp-next");
    const initialsEl = document.getElementById("profile-initials");
    const nameEl = document.getElementById("profile-name-display");

    if (levelEl) levelEl.textContent = `🌟 ${this.state.profile.level}`;
    if (postsEl) postsEl.textContent = this.state.profile.postCount;
    if (votesEl) votesEl.textContent = this.state.profile.voteCount;
    
    if (nameEl) nameEl.textContent = this.state.profile.username;
    if (initialsEl) initialsEl.textContent = this.state.profile.username.substring(0, 2).toUpperCase();

    const currentXpInLevel = this.state.profile.xp % 100;
    if (xpProgress) xpProgress.style.width = `${currentXpInLevel}%`;
    if (xpCurrent) xpCurrent.textContent = `${currentXpInLevel} XP`;
    if (xpNext) xpNext.textContent = `100 XP`;

    // Render achievements
    const achievementsList = document.getElementById("achievements-list");
    if (achievementsList) {
      achievementsList.innerHTML = "";
      if (this.state.profile.achievements.length === 0) {
        achievementsList.innerHTML = `<div style="font-size:0.8rem; color:var(--text-muted); text-align:center; padding:10px;">You haven't unlocked any achievements yet. Vote, comment or study to earn badges!</div>`;
      } else {
        this.state.profile.achievements.forEach(id => {
          const ach = ALL_ACHIEVEMENTS.find(a => a.id === id);
          if (ach) {
            const card = document.createElement("div");
            card.className = "achievement-badge-card";
            card.style = "display:flex; align-items:center; gap:10px; padding:10px; border:var(--border-dim); background:var(--bg-subtle); margin-bottom:6px;";
            card.innerHTML = `
              <div style="font-size:1.5rem;">🌟</div>
              <div>
                <div style="font-size:0.82rem; font-weight:700; color:var(--text-primary);">${ach.title}</div>
                <div style="font-size:0.72rem; color:var(--text-muted);">${ach.desc}</div>
              </div>
            `;
            achievementsList.appendChild(card);
          }
        });
      }
    }
  }
}

const store = new AppStore();

// --- SISTEMA DE TOAST CON DISEÑO NEÓN ---
function showToast(msg, type = "ok") {
  const existing = document.querySelector(".s-toast");
  if (existing) existing.remove();
  const t = document.createElement("div");
  t.className = `s-toast s-toast--${type}`;
  const icon = type === "ok" ? "ri-checkbox-circle-fill" : "ri-error-warning-fill";
  t.innerHTML = `<i class="${icon}"></i> ${msg}`;
  document.body.appendChild(t);
  requestAnimationFrame(() => { t.classList.add("s-toast--in"); });
  setTimeout(() => {
    t.classList.remove("s-toast--in");
    t.addEventListener("transitionend", () => { t.remove(); }, { once: true });
  }, 2800);
}

// --- ROUTER SPA ---
const Router = (() => {
  const SECTIONS = ["feed", "apuntes", "metodos", "foro", "perfil"];
  let current = "feed";

  function show(id) {
    if (!SECTIONS.includes(id)) return;
    current = id;

    SECTIONS.forEach(k => {
      const el = document.getElementById(`section-${k}`);
      if (!el) return;
      if (k === id) {
        el.classList.remove("section--hidden");
        el.classList.add("section--active");
      } else {
        el.classList.add("section--hidden");
        el.classList.remove("section--active");
      }
    });

    document.querySelectorAll(".bottom-nav__item").forEach(item => {
      const active = item.dataset.section === id;
      item.classList.toggle("bottom-nav__item--active", active);
      item.classList.toggle("nav__link--active", active);
      item.setAttribute("aria-current", active ? "page" : "false");
    });

    const content = document.getElementById("app-content");
    if (content) content.scrollTo({ top: 0, behavior: "smooth" });

    document.dispatchEvent(new CustomEvent("section:change", { detail: { section: id } }));
  }

  function getCurrent() { return current; }

  // Listener para bottom-nav
  const bottomNav = document.querySelector(".bottom-nav");
  if (bottomNav) {
    bottomNav.addEventListener("click", e => {
      const item = e.target.closest("[data-section]");
      if (!item) return;
      e.preventDefault();
      show(item.dataset.section);
    });
  }

  // Compatibilidad para otros clicks
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-section]:not(.bottom-nav__item)");
    if (!el) return;
    e.preventDefault();
    show(el.dataset.section);
  });

  return { show, getCurrent };
})();

// --- GESTIÓN DE TEMAS (CLARO / OSCURO) ---
const ThemeManager = (() => {
  function apply(theme) {
    store.state.theme = theme;
    store.save();

    document.body.classList.toggle("light-theme", theme === "light");
    
    document.querySelectorAll(".theme-btn").forEach(btn => {
      const active = btn.dataset.theme === theme;
      btn.classList.toggle("theme-btn--active", active);
    });
  }

  document.addEventListener("click", e => {
    const btn = e.target.closest(".theme-btn");
    if (!btn) return;
    apply(btn.dataset.theme);
    showToast(TRANSLATIONS[store.state.lang]["toast.theme"]);
  });

  return { apply };
})();

// --- SISTEMA DE TRADUCCIÓN i18n ---
const I18n = (() => {
  function apply(lang) {
    if (!TRANSLATIONS[lang]) return;
    store.state.lang = lang;
    store.save();

    // Traducir estáticos
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = TRANSLATIONS[lang][key];
      if (val !== undefined) el.textContent = val;
    });

    // Traducir placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = TRANSLATIONS[lang][key];
      if (val !== undefined) el.placeholder = val;
    });

    // Traducir encabezados específicos
    const sections = {
      feed: ["section.feed.title", "section.feed.sub"],
      apuntes: ["section.apuntes.title", "section.apuntes.sub"],
      metodos: ["section.metodos.title", "section.metodos.sub"],
      foro: ["section.foro.title", "section.foro.sub"]
    };

    Object.keys(sections).forEach(s => {
      const titleEl = document.querySelector(`#section-${s} .section-header__title`);
      const subEl = document.querySelector(`#section-${s} .section-header__sub`);
      const keys = sections[s];
      if (titleEl && TRANSLATIONS[lang][keys[0]]) titleEl.textContent = TRANSLATIONS[lang][keys[0]];
      if (subEl && TRANSLATIONS[lang][keys[1]]) subEl.textContent = TRANSLATIONS[lang][keys[1]];
    });

    // Actualizar botones de idioma activo
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("lang-btn--active", btn.dataset.lang === lang);
    });

    document.documentElement.lang = lang;
    document.dispatchEvent(new CustomEvent("lang:change", { detail: { lang } }));
  }

  document.addEventListener("click", e => {
    const btn = e.target.closest(".lang-btn");
    if (!btn || !btn.dataset.lang) return;
    apply(btn.dataset.lang);
    showToast(TRANSLATIONS[store.state.lang]["toast.lang"]);
  });

  return { apply };
})();

// --- SISTEMA DE RENDERIZACIÓN ---
const Renderers = (() => {
  const feedList = document.getElementById("feed-list");
  const apuntesGrid = document.getElementById("apuntes-grid");
  const metodosGrid = document.getElementById("metodos-grid");
  const foroList = document.getElementById("foro-list");

  const tagColors = {
    "Matematicas": "violet", "Fisica": "amber", "Quimica": "violet",
    "Historia": "cyan", "Literatura": "cyan", "Programacion": "violet",
    "Calculo": "cyan", "General": "default", "Active Recall": "violet",
    "Pomodoro": "amber"
  };

  const tagColor = t => tagColors[t] || "default";

  function getCardClass(tipo) {
    if (tipo === "pregunta") return "post-card--question";
    if (tipo === "apunte") return "post-card--notes";
    return "";
  }

  function renderFeed(searchQuery = "", feedFilter = "hot") {
    if (!feedList) return;
    feedList.innerHTML = "";

    let filtered = [...store.state.posts];
    
    // Filtro por búsqueda
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p => p.titulo.toLowerCase().includes(q) || p.contenido.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q));
    }

    // Ordenar según el filtro seleccionado
    if (feedFilter === "new") {
      // Numeric sort: new posts have large timestamp IDs, old mock posts have "1","2","3","4"
      filtered.sort((a, b) => Number(b.id) - Number(a.id));
    } else if (feedFilter === "top") {
      filtered.sort((a, b) => b.votes - a.votes);
    } else {
      // Hot: recién creadas primero, luego votos + comentarios
      filtered.sort((a, b) => {
        if (a.time === "just now" && b.time !== "just now") return -1;
        if (b.time === "just now" && a.time !== "just now") return 1;
        return (b.votes + (b.comments ? b.comments.length * 5 : 0)) - (a.votes + (a.comments ? a.comments.length * 5 : 0));
      });
    }

    filtered.forEach(p => {
      const lang = store.state.lang;
      const titleKey = `post.${p.id}.titulo`;
      const contentKey = `post.${p.id}.contenido`;
      const title = (TRANSLATIONS[lang] && TRANSLATIONS[lang][titleKey]) || p.titulo;
      const content = (TRANSLATIONS[lang] && TRANSLATIONS[lang][contentKey]) || p.contenido;

      const art = document.createElement("article");
      art.className = `post-card ${getCardClass(p.tipo)}`;
      art.id = `post-${p.id}`;
      art.setAttribute("data-post-id", p.id);
      
      const voteState = store.state.votedPosts[p.id];
      const upClass = voteState === "up" ? "vote-btn--voted" : "";
      const downClass = voteState === "down" ? "vote-btn--down-voted" : "";
      const countClass = voteState === "up" ? "vote-btn__count--voted" : "";

      const commentsCount = p.comments ? p.comments.length : 0;

      art.innerHTML = `
        <div class="post-card__top">
          <span class="subject-tag subject-tag--${tagColor(p.tag)}">${p.tag}</span>
          <span class="post-card__author">
            <span class="author-avatar author-avatar--${p.color}">${p.initials}</span>
            ${p.autor}
          </span>
        </div>
        <h2 class="post-card__title">
          <a href="#" class="post-card__title-link">${title}</a>
        </h2>
        <p class="post-card__excerpt">${content}</p>
        <div class="post-card__bottom">
          <div class="vote-group" role="group" aria-label="Vote">
            <button class="vote-btn vote-btn--up ${upClass}" data-post="${p.id}"><i class="ri-arrow-up-s-fill"></i></button>
            <span class="vote-btn__count ${countClass}" id="votes-${p.id}">${p.votes}</span>
            <button class="vote-btn vote-btn--down ${downClass}" data-post="${p.id}"><i class="ri-arrow-down-s-fill"></i></button>
          </div>
          <button class="comment-btn post-action post-action--comments" data-post-id="${p.id}">
            <i class="ri-chat-3-line"></i><span>${commentsCount}</span>
          </button>
          ${p.solved ? `<span class="solved-badge"><i class="ri-checkbox-circle-fill"></i> Solved</span>` : ""}
        </div>
      `;
      feedList.appendChild(art);
    });
  }

  function renderApuntes(searchQuery = "", tagFilter = "todos") {
    if (!apuntesGrid) return;
    apuntesGrid.innerHTML = "";

    let filtered = store.state.apuntes;

    if (tagFilter !== "todos" && tagFilter !== "All") {
      const normalizedFilter = tagFilter.toLowerCase().trim();
      filtered = filtered.filter(a => {
        const mat = a.materia.toLowerCase().trim();
        return mat === normalizedFilter || 
               (normalizedFilter === "mathematics" && (mat === "matematicas" || mat === "mates")) ||
               (normalizedFilter === "physics" && mat === "fisica") ||
               (normalizedFilter === "chemistry" && mat === "quimica") ||
               (normalizedFilter === "history" && mat === "historia") ||
               (normalizedFilter === "programming" && (mat === "programacion" || mat === "codigo"));
      });
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(a => a.titulo.toLowerCase().includes(q) || a.autor.toLowerCase().includes(q) || a.materia.toLowerCase().includes(q));
    }

    filtered.forEach(a => {
      const lang = store.state.lang;
      const titleKey = `apunte.${a.id}.titulo`;
      const title = (TRANSLATIONS[lang] && TRANSLATIONS[lang][titleKey]) || a.titulo;

      const card = document.createElement("article");
      card.className = "apunte-card";
      
      let fileInfo = `<span class="apunte-card__file-name"><i class="ri-file-text-fill"></i> PDF Study Note</span>`;
      if (a.fileData && a.fileData.dataUrl) {
        fileInfo = `<a href="${a.fileData.dataUrl}" download="${a.fileData.name}" class="apunte-card__file-link"><i class="ri-download-2-line"></i> ${a.fileData.name}</a>`;
      } else if (a.fileLink) {
        fileInfo = `<a href="${a.fileLink}" target="_blank" class="apunte-card__file-link"><i class="ri-external-link-line"></i> External Link</a>`;
      }

      card.innerHTML = `
        <div class="apunte-card__header">
          <div class="apunte-card__icon"><i class="ri-file-text-fill"></i></div>
          <div class="apunte-card__meta-top">
            <span class="apunte-card__materia tag tag--${tagColor(a.materia)}">${a.materia}</span>
            <span class="apunte-card__pages"><i class="ri-pages-line"></i> ${a.paginas} pages</span>
          </div>
        </div>
        <h3 class="apunte-card__title">${title}</h3>
        <div class="apunte-card__file-info">${fileInfo}</div>
        <div class="apunte-card__tags">
          ${a.tags ? a.tags.map(t => `<span class="tag tag--default">${t}</span>`).join("") : ""}
        </div>
        <div class="apunte-card__footer">
          <div class="apunte-card__author">
            <div class="post-card__author-avatar post-card__author-avatar--${a.col}">${a.ini}</div>
            <span class="apunte-card__author-name">${a.autor}</span>
          </div>
          <div class="apunte-card__stats">
            <span><i class="ri-star-fill" style="color:#fcd34d"></i> ${a.rating}</span>
            <span><i class="ri-download-line"></i> ${a.dl}</span>
          </div>
        </div>
        <div class="apunte-card__actions" style="margin-top:12px;">
          <button class="btn btn--primary btn--sm view-apunte-btn" style="flex:1" data-id="${a.id}">
            <i class="ri-book-open-line"></i> View Note
          </button>
        </div>
      `;
      apuntesGrid.appendChild(card);
    });
  }

  function renderMetodos() {
    if (!metodosGrid) return;
    metodosGrid.innerHTML = "";

    STUDY_METHODS.forEach(m => {
      const card = document.createElement("article");
      card.className = "metodo-card";
      card.innerHTML = `
        <div class="metodo-card__header">
          <div class="metodo-card__icon" style="background:rgba(124,58,237,0.15); border:1px solid rgba(124,58,237,0.3); color:#c4b5fd;"><i class="${m.icon}"></i></div>
          <div class="metodo-card__title-group">
            <h3 class="metodo-card__title">${m.nombre}</h3>
            <div class="metodo-card__stats">
              <span><i class="ri-star-fill" style="color:#fcd34d"></i> ${m.rating}</span>
              <span><i class="ri-user-line"></i> ${m.users}</span>
              <span><i class="ri-time-line"></i> ${m.tiempo}</span>
            </div>
          </div>
        </div>
        <p class="metodo-card__desc">${m.desc}</p>
        <div class="metodo-card__steps">
          <h4 class="metodo-card__steps-title"><i class="ri-list-check"></i> How to apply it:</h4>
          <ol class="metodo-card__steps-list">
            ${m.pasos.map((p, i) => `<li><span class="metodo-card__step-num">${i + 1}</span>${p}</li>`).join("")}
          </ol>
        </div>
        <div class="metodo-card__tags">
          ${m.tags.map(t => `<span class="tag tag--default">${t}</span>`).join("")}
        </div>
        <div class="metodo-card__actions">
          <button class="btn btn--primary btn--sm start-method-btn" data-action="${m.action}">
            <i class="ri-play-line"></i> Start now
          </button>
        </div>
      `;
      metodosGrid.appendChild(card);
    });
  }

  function renderForo(searchQuery = "", statusFilter = "todas") {
    if (!foroList) return;
    foroList.innerHTML = "";

    let filtered = [...store.state.foro];

    if (statusFilter === "resueltas") {
      filtered = filtered.filter(q => q.resuelto);
    } else if (statusFilter === "abiertas") {
      filtered = filtered.filter(q => !q.resuelto);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(question => question.titulo.toLowerCase().includes(q) || question.autor.toLowerCase().includes(q) || (question.tags && question.tags.some(t => t.toLowerCase().includes(q))));
    }

    // Ordenar: recién creadas primero, luego el filtro
    if (statusFilter === "hot") {
      filtered.sort((a, b) => {
        if (a.time === "just now" && b.time !== "just now") return -1;
        if (b.time === "just now" && a.time !== "just now") return 1;
        const parseVistas = str => {
          if (typeof str === 'number') return str;
          const s = String(str);
          if (s.endsWith('k')) return parseFloat(s) * 1000;
          return parseInt(s) || 0;
        };
        return parseVistas(b.vistas) - parseVistas(a.vistas);
      });
    } else {
      filtered.sort((a, b) => {
        if (a.time === "just now" && b.time !== "just now") return -1;
        if (b.time === "just now" && a.time !== "just now") return 1;
        return Number(b.id.replace("q-","")) - Number(a.id.replace("q-",""));
      });
    }

    filtered.forEach(q => {
      const lang = store.state.lang;
      const titleKey = `foro.${q.id}.titulo`;
      const title = (TRANSLATIONS[lang] && TRANSLATIONS[lang][titleKey]) || q.titulo;

      const art = document.createElement("article");
      art.className = "foro-card";
      art.innerHTML = `
        <div class="foro-card__left">
          <div class="foro-card__stat"><span class="foro-card__count">${q.resp}</span><span class="foro-card__label">replies</span></div>
          <div class="foro-card__stat"><span class="foro-card__count">${q.vistas}</span><span class="foro-card__label">views</span></div>
          ${q.resuelto ? '<span class="badge--solved badge"><i class="ri-checkbox-circle-fill"></i> Solved</span>' : '<span class="badge--open badge">Open</span>'}
        </div>
        <div class="foro-card__right">
          <h3 class="foro-card__title">
            <a href="#" class="foro-card__link view-foro-btn" data-id="${q.id}">${title}</a>
          </h3>
          <div class="foro-card__meta">
            <div class="post-card__author-avatar post-card__author-avatar--${q.col}" style="width:22px; height:22px; font-size:0.55rem;">${q.ini}</div>
            <span>${q.autor}</span>
            <span class="post-card__meta-sep">·</span>
            <span>${q.time}</span>
          </div>
          <div class="foro-card__tags">
            ${q.tags.map(t => `<span class="tag tag--default">${t}</span>`).join("")}
          </div>
        </div>
      `;
      foroList.appendChild(art);
    });
  }

  return { renderFeed, renderApuntes, renderMetodos, renderForo };
})();

// --- SISTEMA DE VOTOS ---
const VotingSystem = (() => {
  document.addEventListener("click", e => {
    const btn = e.target.closest(".vote-btn");
    if (!btn) return;
    const postId = btn.dataset.post;
    const isUp = btn.classList.contains("vote-btn--up");
    
    // Obtener post
    const post = store.state.posts.find(p => p.id === postId);
    if (!post) return;

    const currentVote = store.state.votedPosts[postId];
    let dir = isUp ? "up" : "down";

    if (currentVote === dir) {
      // Toggle off
      store.state.votedPosts[postId] = null;
      post.votes += (dir === "up" ? -1 : 1);
    } else {
      // Voto nuevo o cambiado
      if (currentVote) {
        // Cambiar dirección
        post.votes += (dir === "up" ? 2 : -2);
      } else {
        // Voto inicial
        post.votes += (dir === "up" ? 1 : -1);
        store.state.profile.voteCount += 1;
        store.addXp(10); // 10 XP por voto
      }
      store.state.votedPosts[postId] = dir;
    }

    // Efecto flash y animación
    btn.classList.add("vote-btn--flash");
    setTimeout(() => { btn.classList.remove("vote-btn--flash"); }, 400);

    store.save();
    store.checkAchievements();
    // Re-render using the current active filter from SearchAndFilter
    const currentFilter = SearchAndFilter ? SearchAndFilter.getActiveFeedFilter() : "hot";
    Renderers.renderFeed("", currentFilter);
    showToast(TRANSLATIONS[store.state.lang]["toast.vote_registered"]);
  });
})();

// --- FILTROS Y BÚSQUEDAS EN TIEMPO REAL ---
const SearchAndFilter = (() => {
  const searchInput = document.getElementById("nav-search");
  let activeFeedFilter = "hot";   // matches renderFeed default
  let activeApuntesFilter = "todos";
  let activeForoFilter = "todas";

  if (searchInput) {
    searchInput.addEventListener("input", e => {
      const q = e.target.value;
      const section = Router.getCurrent();
      if (section === "feed") Renderers.renderFeed(q, activeFeedFilter);
      if (section === "apuntes") Renderers.renderApuntes(q, activeApuntesFilter);
      if (section === "foro") Renderers.renderForo(q, activeForoFilter);
    });
  }

  // Escuchar cambio de filtros (pills)
  document.addEventListener("click", e => {
    // Feed Filters
    const feedFilterBtn = e.target.closest("#section-feed .feed__filter");
    if (feedFilterBtn) {
      document.querySelectorAll("#section-feed .feed__filter").forEach(b => {
        b.classList.remove("feed__filter--active");
        b.setAttribute("aria-selected", "false");
      });
      feedFilterBtn.classList.add("feed__filter--active");
      feedFilterBtn.setAttribute("aria-selected", "true");
      
      const filterId = feedFilterBtn.id;
      if (filterId === "filter-hot") activeFeedFilter = "hot";
      else if (filterId === "filter-new") activeFeedFilter = "new";
      else if (filterId === "filter-top") activeFeedFilter = "top";
      else activeFeedFilter = "hot";

      Renderers.renderFeed(searchInput ? searchInput.value : "", activeFeedFilter);
      return;
    }

    // Apuntes Filters
    const apunteFilterBtn = e.target.closest("#section-apuntes .filter-pill, #section-apuntes .feed__filter");
    if (apunteFilterBtn) {
      document.querySelectorAll("#section-apuntes .filter-pill, #section-apuntes .feed__filter").forEach(b => {
        b.classList.remove("filter-pill--active");
        b.classList.remove("feed__filter--active");
      });
      apunteFilterBtn.classList.add("filter-pill--active");
      apunteFilterBtn.classList.add("feed__filter--active");
      
      const rawTag = apunteFilterBtn.textContent.trim();
      activeApuntesFilter = rawTag === "All" || rawTag === "Todos" ? "todos" : rawTag;
      
      Renderers.renderApuntes(searchInput ? searchInput.value : "", activeApuntesFilter);
      return;
    }

    // Foro Filters
    const foroFilterBtn = e.target.closest("#section-foro .filter-pill, #section-foro .feed__filter");
    if (foroFilterBtn) {
      document.querySelectorAll("#section-foro .filter-pill, #section-foro .feed__filter").forEach(b => {
        b.classList.remove("filter-pill--active");
        b.classList.remove("feed__filter--active");
      });
      foroFilterBtn.classList.add("filter-pill--active");
      foroFilterBtn.classList.add("feed__filter--active");
      
      const label = foroFilterBtn.textContent.trim();
      if (label.includes("Solved") || label.includes("Resueltas")) activeForoFilter = "resueltas";
      else if (label.includes("Open") || label.includes("Abiertas")) activeForoFilter = "abiertas";
      else if (label.includes("Hot") || label.includes("Populares")) activeForoFilter = "hot";
      else activeForoFilter = "todas";

      Renderers.renderForo(searchInput ? searchInput.value : "", activeForoFilter);
    }
  });

  return {
    getActiveFeedFilter: () => activeFeedFilter,
    getActiveApuntesFilter: () => activeApuntesFilter,
    getActiveForoFilter: () => activeForoFilter
  };
})();

// --- MODAL DE PUBLICACIÓN ---
const ModalManager = (() => {
  const modal = document.getElementById("modal-new-post");
  const overlay = document.getElementById("modal-overlay");
  const form = document.getElementById("form-new-post");
  
  let fileData = null;
  let tipo = "metodo";

  function open() {
    if (!modal || !overlay) return;
    modal.classList.add("modal--open");
    overlay.classList.add("modal-overlay--open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    if (!modal || !overlay) return;
    modal.classList.remove("modal--open");
    overlay.classList.remove("modal-overlay--open");
    document.body.style.overflow = "";
    if (form) form.reset();
    resetState();
  }

  function resetState() {
    fileData = null;
    tipo = "metodo";
    document.querySelectorAll(".type-chip").forEach((c, i) => {
      c.classList.toggle("type-chip--active", i === 0);
    });
    setApunteFieldsVisible(false);
    const dropText = document.getElementById("file-drop-text");
    const dropLabel = document.getElementById("file-drop-label");
    if (dropText) dropText.textContent = "Tap to choose PDF or image";
    if (dropLabel) dropLabel.classList.remove("file-drop--selected");
  }

  function setApunteFieldsVisible(visible) {
    const fileSec = document.getElementById("apunte-file-section");
    const linkSec = document.getElementById("apunte-link-section");
    if (fileSec) fileSec.style.display = visible ? "block" : "none";
    if (linkSec) linkSec.style.display = visible ? "block" : "none";
  }

  // Type chips inside modal
  document.addEventListener("click", e => {
    const chip = e.target.closest(".type-chip");
    if (!chip) return;
    document.querySelectorAll(".type-chip").forEach(c => c.classList.remove("type-chip--active"));
    chip.classList.add("type-chip--active");
    const radio = chip.querySelector("input[type='radio']");
    if (radio) {
      tipo = radio.value;
      const sel = document.getElementById("post-tipo");
      if (sel) sel.value = radio.value;
      setApunteFieldsVisible(tipo === "apunte");
    }
  });

  // File Upload listener
  const fileInput = document.getElementById("post-archivo");
  if (fileInput) {
    fileInput.addEventListener("change", function() {
      const file = this.files && this.files[0];
      if (!file) return;
      const dropText = document.getElementById("file-drop-text");
      const dropLabel = document.getElementById("file-drop-label");
      if (dropText) dropText.textContent = file.name;
      if (dropLabel) dropLabel.classList.add("file-drop--selected");

      const reader = new FileReader();
      reader.onload = ev => {
        fileData = {
          name: file.name,
          dataUrl: ev.target.result,
          size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
          mimeType: file.type
        };
      };
      reader.readAsDataURL(file);
    });
  }

  // Form submit
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      
      const tituloVal = document.getElementById("post-titulo").value.trim();
      const contenidoVal = document.getElementById("post-contenido").value.trim();
      const tagVal = document.getElementById("post-tag").value;
      const linkVal = document.getElementById("post-link") ? document.getElementById("post-link").value.trim() : "";

      if (!tituloVal || !contenidoVal) {
        showToast("Please fill in all required fields", "error");
        return;
      }

      const initials = store.state.profile.username.substring(0, 2).toUpperCase();

      if (tipo === "apunte") {
        const newApunte = {
          id: `a-${Date.now()}`,
          titulo: tituloVal,
          materia: tagVal,
          paginas: Math.floor(Math.random() * 40) + 5,
          dl: "0",
          autor: store.state.profile.username,
          col: store.state.profile.color,
          ini: initials,
          rating: "New",
          tags: [tagVal, "Free PDF"],
          fileName: fileData ? fileData.name : (linkVal ? "External link" : "Note"),
          fileLink: linkVal,
          fileData: fileData
        };
        store.state.apuntes.unshift(newApunte);
      } else if (tipo === "pregunta") {
        const newQuestion = {
          id: `q-${Date.now()}`,
          titulo: tituloVal,
          contenido: contenidoVal,
          resp: 0,
          vistas: "1",
          resuelto: false,
          autor: store.state.profile.username,
          col: store.state.profile.color,
          ini: initials,
          time: "just now",
          tags: [tagVal, "Question"],
          comments: []
        };
        store.state.foro.unshift(newQuestion);

        const newPost = {
          id: `${Date.now()}`,
          titulo: tituloVal,
          contenido: contenidoVal,
          tag: tagVal,
          tipo: tipo,
          autor: store.state.profile.username,
          initials: initials,
          color: store.state.profile.color,
          time: "just now",
          votes: 1,
          comments: []
        };
        store.state.posts.unshift(newPost);
      } else {
        const newPost = {
          id: `${Date.now()}`,
          titulo: tituloVal,
          contenido: contenidoVal,
          tag: tagVal,
          tipo: tipo,
          autor: store.state.profile.username,
          initials: initials,
          color: store.state.profile.color,
          time: "just now",
          votes: 1,
          comments: []
        };
        store.state.posts.unshift(newPost);
      }

      store.state.profile.postCount += 1;
      store.addXp(50);
      store.save();
      store.checkAchievements();

      // ⚠️ Save tipo BEFORE close() — close() calls resetState() which sets tipo = "metodo"
      const tipoCreado = tipo;
      close();

      // Re-render all sections with no filter so new item is visible
      Renderers.renderFeed("", "new");
      Renderers.renderApuntes("", "todos");
      Renderers.renderForo("", "todas");

      showToast(TRANSLATIONS[store.state.lang]["toast.post_created"]);

      // Navigate to correct section using saved tipo
      if (tipoCreado === "apunte") Router.show("apuntes");
      else if (tipoCreado === "pregunta") Router.show("foro");
      else Router.show("feed");
    });
  }

  // Open buttons
  document.addEventListener("click", e => {
    if (e.target.closest("#btn-new-post") ||
        e.target.closest("#btn-new-post-nav") ||
        e.target.closest("#btn-new-post-2") ||
        e.target.closest("#btn-nueva-pregunta") ||
        e.target.closest("#btn-subir-apunte")) {
      open();
    }
  });

  if (overlay) overlay.addEventListener("click", close);
  const modalClose = document.getElementById("modal-close");
  const modalCancel = document.getElementById("modal-cancel");
  if (modalClose) modalClose.addEventListener("click", close);
  if (modalCancel) modalCancel.addEventListener("click", close);

  return { open, close };
})();

// --- MODAL DE COMENTARIOS Y DETALLES DE POST ---
const CommentsManager = (() => {
  const modal = document.getElementById("modal-post-detail");
  const overlay = document.getElementById("modal-post-detail-overlay");
  const closeBtn = document.getElementById("modal-post-detail-close");
  const container = document.getElementById("post-detail-container");
  const commentForm = document.getElementById("form-new-comment");
  const commentInput = document.getElementById("comment-content");
  const commentsList = document.getElementById("comments-list");
  const countTitle = document.getElementById("comments-count-title");

  let activePostId = null;

  function open(postId) {
    activePostId = postId;
    const post = store.state.posts.find(p => p.id === postId);
    if (!post) return;

    modal.classList.add("modal--open");
    overlay.classList.add("modal-overlay--open");
    document.body.style.overflow = "hidden";

    renderDetail(post);
  }

  function close() {
    if (modal) modal.classList.remove("modal--open");
    if (overlay) overlay.classList.remove("modal-overlay--open");
    document.body.style.overflow = "";
    activePostId = null;
  }

  function renderDetail(post) {
    if (!container) return;
    
    // Render del post principal
    container.innerHTML = `
      <div style="border-bottom:var(--border-dim); padding-bottom:15px; margin-bottom:15px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <span class="tag tag--violet">${post.tag}</span>
          <span style="font-size:0.72rem; color:var(--text-muted);">${post.time}</span>
        </div>
        <h3 style="font-family:var(--font-display); font-size:1.15rem; font-weight:800; color:var(--text-primary); margin-bottom:10px;">${post.titulo}</h3>
        <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.65; white-space:pre-wrap;">${post.contenido}</p>
        <div style="display:flex; align-items:center; gap:8px; margin-top:15px; font-size:0.78rem; color:var(--text-muted);">
          <span>By:</span>
          <div class="post-card__author-avatar post-card__author-avatar--${post.color}" style="width:20px; height:20px; font-size:0.55rem;">${post.initials}</div>
          <span style="font-weight:700; color:var(--text-primary);">${post.autor}</span>
        </div>
      </div>
    `;

    // Render de comentarios
    renderComments(post);
  }

  function renderComments(post) {
    if (!commentsList || !countTitle) return;
    commentsList.innerHTML = "";
    
    const comments = post.comments || [];
    countTitle.textContent = `Comments (${comments.length})`;

    if (comments.length === 0) {
      commentsList.innerHTML = `<div style="font-size:0.8rem; color:var(--text-muted); text-align:center; padding:15px;">No comments yet. Be the first to reply!</div>`;
      return;
    }

    comments.forEach(c => {
      const el = document.createElement("div");
      el.style = "padding:12px; border:var(--border-dim); background:var(--bg-subtle); margin-bottom:8px; display:flex; flex-direction:column; gap:6px;";
      el.innerHTML = `
        <div style="display:flex; align-items:center; gap:8px; font-size:0.75rem;">
          <div class="post-card__author-avatar post-card__author-avatar--${c.color}" style="width:18px; height:18px; font-size:0.5rem;">${c.autor.substring(0,2).toUpperCase()}</div>
          <span style="font-weight:700; color:var(--text-primary);">${c.autor}</span>
          <span style="color:var(--text-muted); font-size:0.68rem;">${c.time || "just now"}</span>
        </div>
        <p style="font-size:0.82rem; color:var(--text-secondary); line-height:1.5; white-space:pre-wrap;">${c.content}</p>
      `;
      commentsList.appendChild(el);
    });
  }

  // Agregar comentario
  if (commentForm) {
    commentForm.addEventListener("submit", e => {
      e.preventDefault();
      if (!activePostId) return;
      const post = store.state.posts.find(p => p.id === activePostId);
      if (!post) return;

      const txt = commentInput.value.trim();
      if (!txt) return;

      const comment = {
        autor: store.state.profile.username,
        color: store.state.profile.color,
        content: txt,
        time: "just now"
      };

      if (!post.comments) post.comments = [];
      post.comments.push(comment);

      store.state.profile.commentCount += 1;
      store.addXp(25); // 25 XP por comentar
      store.save();
      store.checkAchievements();

      commentInput.value = "";
      renderComments(post);
      Renderers.renderFeed();
      showToast(TRANSLATIONS[store.state.lang]["toast.comment_added"]);
    });
  }

  // Listeners para abrir vista detallada
  document.addEventListener("click", e => {
    const cardTitle = e.target.closest(".post-card__title-link");
    const commentBtn = e.target.closest(".comment-btn");
    
    if (cardTitle) {
      e.preventDefault();
      const card = cardTitle.closest(".post-card");
      if (card) open(card.dataset.postId);
      return;
    }

    if (commentBtn) {
      e.preventDefault();
      open(commentBtn.dataset.postId);
    }
  });

  if (overlay) overlay.addEventListener("click", close);
  if (closeBtn) closeBtn.addEventListener("click", close);

  return { open, close };
})();

// --- ASISTENTES DE ESTUDIO INTERACTIVOS (POMODORO & FLASHCARDS) ---
const StudyAssistant = (() => {
  // --- POMODORO TIMER ---
  const pomodoroModal = document.getElementById("modal-pomodoro");
  const pomodoroOverlay = document.getElementById("modal-pomodoro-overlay");
  const pomodoroClose = document.getElementById("modal-pomodoro-close");
  const pomodoroStart = document.getElementById("pomodoro-btn-start");
  const pomodoroReset = document.getElementById("pomodoro-btn-reset");
  const pomodoroTimeEl = document.getElementById("pomodoro-time");
  const pomodoroStatusEl = document.getElementById("pomodoro-status");
  const pomodoroProgress = document.getElementById("pomodoro-progress");
  const pomodoroCountEl = document.getElementById("pomodoro-count");

  let pomodoroInterval = null;
  let pomodoroTimeLeft = 25 * 60; // 25 min por defecto
  let pomodoroTotalDuration = 25 * 60;
  let isTimerRunning = false;
  let isWorkMode = true; // true = Work, false = Break

  // SVG dashoffset
  const ringRadius = 85;
  const ringCircumference = 2 * Math.PI * ringRadius;
  if (pomodoroProgress) {
    pomodoroProgress.style.strokeDasharray = ringCircumference;
    pomodoroProgress.style.strokeDashoffset = 0;
  }

  function setProgress(percent) {
    if (!pomodoroProgress) return;
    const offset = ringCircumference - (percent / 100) * ringCircumference;
    pomodoroProgress.style.strokeDashoffset = offset;
  }

  function openPomodoro() {
    pomodoroModal.classList.add("modal--open");
    pomodoroOverlay.classList.add("modal-overlay--open");
    document.body.style.overflow = "hidden";
    updateTimerUi();
  }

  function closePomodoro() {
    pomodoroModal.classList.remove("modal--open");
    pomodoroOverlay.classList.remove("modal-overlay--open");
    document.body.style.overflow = "";
    pauseTimer();
  }

  function updateTimerUi() {
    const mins = Math.floor(pomodoroTimeLeft / 60);
    const secs = pomodoroTimeLeft % 60;
    if (pomodoroTimeEl) pomodoroTimeEl.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    
    const pct = ((pomodoroTotalDuration - pomodoroTimeLeft) / pomodoroTotalDuration) * 100;
    setProgress(pct);
  }

  function startTimer() {
    if (isTimerRunning) return;
    isTimerRunning = true;
    if (pomodoroStart) pomodoroStart.innerHTML = `<i class="ri-pause-fill"></i> Pause`;

    pomodoroInterval = setInterval(() => {
      pomodoroTimeLeft--;
      updateTimerUi();

      if (pomodoroTimeLeft <= 0) {
        clearInterval(pomodoroInterval);
        isTimerRunning = false;
        pomodoroInterval = null;

        if (isWorkMode) {
          // Completado
          store.state.profile.pomodoroCount++;
          store.addXp(100); // 100 XP por Pomodoro
          store.save();
          store.checkAchievements();
          if (pomodoroCountEl) pomodoroCountEl.textContent = store.state.profile.pomodoroCount;

          showToast(TRANSLATIONS[store.state.lang]["pomodoro.completed"], "ok");

          // Cambiar a Break
          isWorkMode = false;
          pomodoroTimeLeft = 5 * 60;
          pomodoroTotalDuration = 5 * 60;
          if (pomodoroStatusEl) pomodoroStatusEl.textContent = TRANSLATIONS[store.state.lang]["pomodoro.break"];
          if (pomodoroProgress) pomodoroProgress.style.stroke = "var(--neon-cyan)";
        } else {
          showToast("Break over! Let's get back to work 💪", "ok");
          isWorkMode = true;
          pomodoroTimeLeft = 25 * 60;
          pomodoroTotalDuration = 25 * 60;
          if (pomodoroStatusEl) pomodoroStatusEl.textContent = TRANSLATIONS[store.state.lang]["pomodoro.work"];
          if (pomodoroProgress) pomodoroProgress.style.stroke = "var(--neon-purple)";
        }
        updateTimerUi();
        if (pomodoroStart) pomodoroStart.innerHTML = `<i class="ri-play-fill"></i> Start`;
      }
    }, 1000);
  }

  function pauseTimer() {
    isTimerRunning = false;
    if (pomodoroInterval) clearInterval(pomodoroInterval);
    pomodoroInterval = null;
    if (pomodoroStart) pomodoroStart.innerHTML = `<i class="ri-play-fill"></i> Start`;
  }

  function resetTimer() {
    pauseTimer();
    isWorkMode = true;
    pomodoroTimeLeft = 25 * 60;
    pomodoroTotalDuration = 25 * 60;
    if (pomodoroStatusEl) pomodoroStatusEl.textContent = TRANSLATIONS[store.state.lang]["pomodoro.work"];
    if (pomodoroProgress) pomodoroProgress.style.stroke = "var(--neon-purple)";
    updateTimerUi();
  }

  if (pomodoroStart) {
    pomodoroStart.addEventListener("click", () => {
      isTimerRunning ? pauseTimer() : startTimer();
    });
  }

  if (pomodoroReset) pomodoroReset.addEventListener("click", resetTimer);
  if (pomodoroClose) pomodoroClose.addEventListener("click", closePomodoro);
  if (pomodoroOverlay) pomodoroOverlay.addEventListener("click", closePomodoro);


  // --- ACTIVE RECALL FLASHCARDS ---
  const fcModal = document.getElementById("modal-flashcards");
  const fcOverlay = document.getElementById("modal-flashcards-overlay");
  const fcClose = document.getElementById("modal-flashcards-close");
  const fcCurrentNum = document.getElementById("flashcard-current-num");
  const fcTotalNum = document.getElementById("flashcard-total-num");
  const fcBox = document.getElementById("flashcard-box");
  const fcMateria = document.getElementById("flashcard-materia");
  const fcQuestion = document.getElementById("flashcard-question");
  const fcAnswer = document.getElementById("flashcard-answer");

  let flashcardIndex = 0;
  let flipped = false;

  function openFlashcards() {
    fcModal.classList.add("modal--open");
    fcOverlay.classList.add("modal-overlay--open");
    document.body.style.overflow = "hidden";
    
    flashcardIndex = 0;
    if (fcTotalNum) fcTotalNum.textContent = MOCK_FLASHCARDS.length;
    loadFlashcard();
  }

  function closeFlashcards() {
    fcModal.classList.remove("modal--open");
    fcOverlay.classList.remove("modal-overlay--open");
    document.body.style.overflow = "";
  }

  function loadFlashcard() {
    flipped = false;
    const card = fcBox ? fcBox.querySelector(".flashcard") : null;
    if (card) card.classList.remove("flashcard--flipped");

    if (fcCurrentNum) fcCurrentNum.textContent = flashcardIndex + 1;
    const item = MOCK_FLASHCARDS[flashcardIndex];
    if (item) {
      const lang = store.state.lang;
      const qKey = `fc.${flashcardIndex + 1}.q`;
      const aKey = `fc.${flashcardIndex + 1}.a`;
      const questionText = (TRANSLATIONS[lang] && TRANSLATIONS[lang][qKey]) || item.question;
      const answerText = (TRANSLATIONS[lang] && TRANSLATIONS[lang][aKey]) || item.answer;

      if (fcMateria) {
        fcMateria.textContent = item.materia;
        fcMateria.className = `flashcard__materia tag tag--${Renderers.tagColor(item.materia)}`;
      }
      if (fcQuestion) fcQuestion.textContent = questionText;
      if (fcAnswer) fcAnswer.textContent = answerText;
    }
  }

  if (fcBox) {
    fcBox.addEventListener("click", () => {
      flipped = !flipped;
      const card = fcBox.querySelector(".flashcard");
      if (card) card.classList.toggle("flashcard--flipped", flipped);
    });
  }

  document.addEventListener("click", e => {
    const btn = e.target.closest(".eval-btn");
    if (!btn) return;
    e.stopPropagation();

    // Sumar 15 XP por repasar tarjeta
    store.addXp(15);

    flashcardIndex++;
    if (flashcardIndex >= MOCK_FLASHCARDS.length) {
      // Completado baraja
      store.state.profile.flashcardsCompleted++;
      store.addXp(50); // 50 XP extra de bonus
      store.save();
      store.checkAchievements();
      showToast(TRANSLATIONS[store.state.lang]["flashcard.completed"], "ok");
      closeFlashcards();
    } else {
      loadFlashcard();
    }
  });

  if (fcClose) fcClose.addEventListener("click", closeFlashcards);
  if (fcOverlay) fcOverlay.addEventListener("click", closeFlashcards);


  // --- TRIGGER CLICKS DE METODOS ---
  document.addEventListener("click", e => {
    const btn = e.target.closest(".start-method-btn");
    if (!btn) return;
    const act = btn.dataset.action;
    if (act === "pomodoro") openPomodoro();
    if (act === "flashcards") openFlashcards();
  });

  return { openPomodoro, openFlashcards };
})();

// --- PERFIL DE USUARIO ---
const ProfileManager = (() => {
  const input = document.getElementById("profile-username-input");
  const saveBtn = document.getElementById("btn-save-username");
  const colorPicker = document.getElementById("color-picker");

  // Iniciar datos en formulario
  if (input) input.value = store.state.profile.username;

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const val = input ? input.value.trim() : "";
      if (!val) return;
      store.state.profile.username = val;
      store.save();
      store.updateProfileUi();
      showToast(TRANSLATIONS[store.state.lang]["toast.profile_saved"]);
    });
  }

  // Color picker de avatar
  if (colorPicker) {
    document.addEventListener("click", e => {
      const swatch = e.target.closest(".color-swatch");
      if (!swatch) return;
      store.state.profile.color = swatch.dataset.color;
      store.save();
      store.updateProfileUi();
      
      document.querySelectorAll(".color-swatch").forEach(s => {
        s.classList.toggle("color-swatch--active", s.dataset.color === store.state.profile.color);
      });
      
      swatch.animate(
        [{ transform: "scale(1.25)" }, { transform: "scale(1.08)" }],
        { duration: 280, easing: "cubic-bezier(0.34,1.56,0.64,1)" }
      );
    });
  }
})();

// --- CARGAR MÁS ---
const LoadMore = (() => {
  document.addEventListener("click", e => {
    const btn = e.target.closest("#btn-load-more");
    if (!btn) return;
    btn.disabled = true;
    btn.innerHTML = '<i class="ri-loader-4-line" style="animation:spin .8s linear infinite"></i> Loading...';
    setTimeout(() => {
      // Agregar algunos posts adicionales mockeados
      const currentLen = store.state.posts.length;
      const extra = [
        {
          id: `extra-${Date.now()}-1`,
          titulo: "Cornell Note-Taking Method: Structure your notebooks step by step",
          contenido: "Divide your page into three sections: class notes, key cues, and summary. Forces you to actively process information during lectures.",
          tag: "General",
          tipo: "metodo",
          autor: "CornellPro",
          initials: "CP",
          color: "pink",
          time: "4 days ago",
          votes: 145,
          comments: []
        },
        {
          id: `extra-${Date.now()}-2`,
          titulo: "What is the formula to calculate the kinetic friction coefficient?",
          contenido: "We have a block on an inclined plane and I don't remember how to relate the normal force to the kinetic friction coefficient.",
          tag: "Physics",
          tipo: "pregunta",
          autor: "PhysicsFan",
          initials: "FF",
          color: "green",
          time: "5 days ago",
          votes: 78,
          comments: []
        }
      ];
      store.state.posts.push(...extra);
      store.save();
      Renderers.renderFeed();

      btn.disabled = false;
      btn.innerHTML = '<i class="ri-refresh-line"></i> Load more';
    }, 1200);
  });
})();

// --- APUNTES ACCIONES EXTRA ---
document.addEventListener("click", e => {
  const btn = e.target.closest(".view-apunte-btn");
  if (!btn) return;
  const id = btn.dataset.id;
  const apunte = store.state.apuntes.find(a => a.id === id);
  if (apunte) {
    showToast(`Viewing note: ${apunte.titulo} 📖`);
    // Dar 10 XP por leer apunte
    store.addXp(10);
    store.save();
  }
});

// --- FORO ACCIONES EXTRA ---
document.addEventListener("click", e => {
  const btn = e.target.closest(".view-foro-btn");
  if (!btn) return;
  e.preventDefault();
  const id = btn.dataset.id;
  const q = store.state.foro.find(item => item.id === id);
  if (q) {
    showToast(`Opening forum thread: ${q.titulo} 💬`);
    // Dar 10 XP por leer hilo del foro
    store.addXp(10);
    store.save();
  }
});

// --- INICIALIZAR APLICACIÓN ---
// Use readyState check: for a plain <script> at end of </body>, DOMContentLoaded
// may or may not have already fired depending on browser parsing order.
function _initApp() {
  // Apply saved theme and language
  ThemeManager.apply(store.state.theme);
  I18n.apply(store.state.lang);

  // Render all sections
  Renderers.renderFeed();
  Renderers.renderApuntes();
  Renderers.renderMetodos();
  Renderers.renderForo();

  // Update profile UI
  store.updateProfileUi();

  // Ctrl+K search shortcut
  const navSearch = document.getElementById("nav-search");
  document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      if (navSearch) { navSearch.focus(); navSearch.select(); }
    }
    if (e.key === "Escape" && document.activeElement === navSearch) {
      navSearch.blur();
    }
  });

  console.log("[Studiit v5.0] ✅ Loaded — posts:", store.state.posts.length, "| apuntes:", store.state.apuntes.length, "| foro:", store.state.foro.length);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", _initApp);
} else {
  _initApp();
}
