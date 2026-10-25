// Dev Learning Command Center - Core Logic & State Management
const STORAGE_KEY = 'dev_learning_command_center_v1';

const DEFAULT_STATE = {
  profile: {
    name: 'Fullstack Engineer (PHP -> Go / TS / Next / .NET)',
    todayFocus: 'Memahami pola Goroutine & Channel di RTMS_Monitoring serta mengetik Props/Hooks di React TypeScript',
    streakDays: 3,
    lastActiveDate: new Date().toISOString().split('T')[0],
    pomodoroCompleted: 4
  },
  dailyChecklist: [
    { id: 'dc-1', text: '30 Menit: Bedah 1 file kode Golang (Gin/Service/Worker) di project RTMS_Monitoring', category: 'Golang', done: true },
    { id: 'dc-2', text: '30 Menit: Latihan mengetik Component Props & Custom Hook di React + TypeScript tanpa "any"', category: 'React TS', done: false },
    { id: 'dc-3', text: '20 Menit: Baca konsep Server Component vs Client Component di Next.js App Router', category: 'Next.js', done: false },
    { id: 'dc-4', text: '20 Menit: Bandingkan Dependency Injection & Controller di ASP.NET Core dengan Laravel Service Container', category: '.NET', done: false },
    { id: 'dc-5', text: 'Catat minimal 1 Snippet atau AI Prompt yang berhasil memecahkan bug hari ini', category: 'AI & Riset', done: true }
  ],
  roadmaps: [
    {
      id: 'golang',
      name: 'Golang & Gin',
      badge: 'Prioritas Utama (RTMS)',
      color: 'cyan',
      icon: 'fa-brands fa-golang',
      description: 'Transisi dari PHP OOP ke komposisi Struct, Pointer, Concurrency (Goroutine), dan performa tinggi dengan Gin.',
      modules: [
        {
          id: 'go-mod-1',
          title: '1. Dasar Go, Tipe Data & Pointer',
          notes: 'Di PHP variabel di-pass by value kecuali object. Di Go, pointer (* dan &) memberi kontrol eksplisit apakah data di-copy atau di-referensi.',
          topics: [
            { id: 'go-1-1', title: 'Package, Module (go.mod), dan Exported Identifier (Huruf Kapital = Public)', done: true },
            { id: 'go-1-2', title: 'Slice vs Array, Map, dan operasi append/copy', done: true },
            { id: 'go-1-3', title: 'Memahami Pointer (*T dan &x) — kapan pakai value vs pointer', done: true },
            { id: 'go-1-4', title: 'Error Handling eksplisit (if err != nil) menggantikan try-catch PHP', done: true }
          ]
        },
        {
          id: 'go-mod-2',
          title: '2. Struct & Interface vs Class PHP (Laravel/Yii)',
          notes: 'Go tidak punya keyword "class" atau "extends". Gunakan Struct untuk data, Receiver Method untuk fungsi class, dan Interface secara implisit.',
          topics: [
            { id: 'go-2-1', title: 'Struct & Struct Tags (`json:"id" db:"id"`) — setara properti Model + fillable/casts', done: true },
            { id: 'go-2-2', title: 'Value Receiver vs Pointer Receiver pada Method Struct', done: true },
            { id: 'go-2-3', title: 'Implicit Interface (Duck Typing) untuk Dependency Injection & Mocking', done: false },
            { id: 'go-2-4', title: 'Struct Embedding (Composition over Inheritance)', done: false }
          ]
        },
        {
          id: 'go-mod-3',
          title: '3. Concurrency: Goroutine, Channel & Context',
          notes: 'Senjata utama Go yang tidak dimiliki PHP standar. Digunakan di RTMS_Monitoring untuk worker metrics & antrian alert.',
          topics: [
            { id: 'go-3-1', title: 'Menjalankan fungsi asynchronous ringan dengan keyword `go` (Goroutine)', done: true },
            { id: 'go-3-2', title: 'Unbuffered vs Buffered Channel untuk komunikasi antar Goroutine', done: false },
            { id: 'go-3-3', title: 'Statement `select`, `sync.WaitGroup`, dan `sync.Mutex` (mencegah Race Condition)', done: false },
            { id: 'go-3-4', title: 'Context (`context.Context`) untuk Timeout, Cancellation, dan Graceful Shutdown', done: false }
          ]
        },
        {
          id: 'go-mod-4',
          title: '4. Gin HTTP Framework & Middleware',
          notes: 'Mirip Routing & Middleware di Laravel, namun jauh lebih cepat dan menggunakan `*gin.Context`.',
          topics: [
            { id: 'go-4-1', title: 'Routing Group, URL Param (`c.Param`), dan Query (`c.Query`)', done: true },
            { id: 'go-4-2', title: 'Request Validation & Binding (`c.ShouldBindJSON`) — setara FormRequest Laravel', done: true },
            { id: 'go-4-3', title: 'Custom Middleware (`c.Next()`, `c.AbortWithStatusJSON`) untuk JWT & RBAC', done: false },
            { id: 'go-4-4', title: 'Struktur Clean Architecture: Handler (Controller) -> Service -> Repository', done: false }
          ]
        },
        {
          id: 'go-mod-5',
          title: '5. Database PostgreSQL (pgx/sqlx) & Redis',
          notes: 'Berbeda dengan Eloquent yang serba otomatis, di Go query SQL lebih eksplisit dan sangat cepat.',
          topics: [
            { id: 'go-5-1', title: 'Connection Pooling PostgreSQL & Query Row / Select dengan pgx/sqlx', done: false },
            { id: 'go-5-2', title: 'Database Transaction (`tx.Begin`, `defer tx.Rollback`, `tx.Commit`)', done: false },
            { id: 'go-5-3', title: 'Redis Caching, Rate Limiting, dan Pub/Sub di Go', done: false }
          ]
        },
        {
          id: 'go-mod-6',
          title: '6. Real-time WebSocket & Linux Agent',
          notes: 'Studi kasus langsung pada sistem RTMS_Monitoring.',
          topics: [
            { id: 'go-6-1', title: 'WebSocket Hub Pattern (Register, Unregister, Broadcast client connections)', done: false },
            { id: 'go-6-2', title: 'Membaca metrics Linux (`/proc/stat`, `/proc/meminfo`) dari binary Go', done: false },
            { id: 'go-6-3', title: 'Cross-compilation binary Go (`GOOS=linux GOARCH=amd64 go build`)', done: false }
          ]
        }
      ]
    },
    {
      id: 'react-ts',
      name: 'React + TypeScript',
      badge: 'Frontend Modern',
      color: 'blue',
      icon: 'fa-brands fa-react',
      description: 'Membangun UI deklaratif dengan keamanan tipe statis TypeScript, Hooks, dan manajemen state server via TanStack Query.',
      modules: [
        {
          id: 'rts-mod-1',
          title: '1. TypeScript Fundamental & Generics',
          notes: 'Anggap TypeScript sebagai Type Hinting PHP 8.2+ versi super ketat di sisi Frontend.',
          topics: [
            { id: 'rts-1-1', title: '`interface` vs `type`, Union Types (`status: "idle" | "loading" | "error"`)', done: true },
            { id: 'rts-1-2', title: 'Optional Chaining (`?.`), Nullish Coalescing (`??`), dan Type Narrowing', done: true },
            { id: 'rts-1-3', title: 'Generics (`ApiResponse<T>`, `Array<T>`) dan Utility Types (`Partial`, `Pick`, `Omit`, `Record`)', done: false }
          ]
        },
        {
          id: 'rts-mod-2',
          title: '2. Component Architecture & Props Typing',
          notes: 'Berpindah dari manipulasi DOM jQuery/Blade ke komponen deklaratif berbasis state.',
          topics: [
            { id: 'rts-2-1', title: 'Mengetik Props Komponen, `children: React.ReactNode`, dan Default Props', done: true },
            { id: 'rts-2-2', title: 'Event Typing (`React.ChangeEvent<HTMLInputElement>`, `React.FormEvent`)', done: false },
            { id: 'rts-2-3', title: 'Conditional Rendering & List Key yang optimal', done: true }
          ]
        },
        {
          id: 'rts-mod-3',
          title: '3. React Hooks: useState, useEffect, useRef, useMemo',
          notes: 'Memahami siklus hidup render komponen dan kapan efek samping dijalankan.',
          topics: [
            { id: 'rts-3-1', title: '`useState<T>` dengan tipe eksplisit untuk state objek/array kompleks', done: true },
            { id: 'rts-3-2', title: '`useEffect` Dependency Array & Cleanup Function (mencegah memory leak timer/socket)', done: false },
            { id: 'rts-3-3', title: '`useRef` untuk referensi DOM dan nilai mutable tanpa memicu re-render', done: false },
            { id: 'rts-3-4', title: '`useMemo` & `useCallback` untuk optimasi performa render', done: false }
          ]
        },
        {
          id: 'rts-mod-4',
          title: '4. Custom Hooks & Context API',
          notes: 'Memisahkan logika bisnis dari tampilan UI (mirip memisahkan Service dari Blade view).',
          topics: [
            { id: 'rts-4-1', title: 'Membuat Custom Hook (misal: `useWebSocket`, `useDebounce`, `useAuth`)', done: false },
            { id: 'rts-4-2', title: 'React Context API dengan TypeScript untuk Global State (Auth/Theme)', done: false }
          ]
        },
        {
          id: 'rts-mod-5',
          title: '5. Data Fetching: TanStack Query (React Query) & Axios',
          notes: 'Jangan fetch API di dalam useEffect biasa! Gunakan TanStack Query untuk caching, loading, dan auto-refetch.',
          topics: [
            { id: 'rts-5-1', title: 'Setup Axios Instance + Interceptor untuk injeksi Bearer Token JWT otomatis', done: true },
            { id: 'rts-5-2', title: '`useQuery` untuk GET data, caching, `staleTime`, dan `refetchInterval`', done: false },
            { id: 'rts-5-3', title: '`useMutation` + `queryClient.invalidateQueries` setelah POST/PUT/DELETE', done: false }
          ]
        },
        {
          id: 'rts-mod-6',
          title: '6. Real-time UI, Charting & Tailwind CSS',
          notes: 'Integrasi WebSocket stream ke grafik real-time.',
          topics: [
            { id: 'rts-6-1', title: 'Update state grafik secara real-time dari pesan WebSocket', done: false },
            { id: 'rts-6-2', title: 'Pola reusable komponen UI dengan Tailwind CSS (Badge, Modal, Data Table)', done: true }
          ]
        }
      ]
    },
    {
      id: 'nextjs',
      name: 'Next.js (App Router)',
      badge: 'Fullstack React',
      color: 'indigo',
      icon: 'fa-solid fa-layer-group',
      description: 'Framework React produksi dengan Server Components (RSC), SSR, routing berbasis folder, dan optimasi performa.',
      modules: [
        {
          id: 'next-mod-1',
          title: '1. App Router & File-based Routing',
          notes: 'Di Laravel kita definisikan di routes/web.php. Di Next.js, struktur folder di dalam `app/` otomatis menjadi route.',
          topics: [
            { id: 'next-1-1', title: 'Konvensi file: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`', done: true },
            { id: 'next-1-2', title: 'Dynamic Routes (`app/servers/[id]/page.tsx`) dan Route Groups (`(dashboard)`)', done: false },
            { id: 'next-1-3', title: 'Navigasi dengan `<Link>` dan hook `useRouter`, `usePathname`, `useSearchParams`', done: false }
          ]
        },
        {
          id: 'next-mod-2',
          title: '2. Server Components (RSC) vs Client Components',
          notes: 'Server Component dirender di server (seperti Blade), sedangkan Client Component (`"use client"`) memiliki interaktivitas browser.',
          topics: [
            { id: 'next-2-1', title: 'Memahami default Server Component vs kapan harus menambahkan `"use client"`', done: false },
            { id: 'next-2-2', title: 'Pola komposisi: Menaruh Client Component di paling ujung (leaf) agar bundle tetap kecil', done: false }
          ]
        },
        {
          id: 'next-mod-3',
          title: '3. Data Fetching, SSR, SSG & Caching',
          notes: 'Fetch langsung menggunakan `async/await` di dalam Server Component.',
          topics: [
            { id: 'next-3-1', title: 'Async Server Components: Fetch data langsung tanpa `useEffect`', done: false },
            { id: 'next-3-2', title: 'Static vs Dynamic Rendering & Revalidation (`revalidatePath`, `revalidateTag`)', done: false },
            { id: 'next-3-3', title: 'Streaming & `<Suspense>` untuk menampilkan skeleton loading per bagian halaman', done: false }
          ]
        },
        {
          id: 'next-mod-4',
          title: '4. Server Actions & Route Handlers (API Routes)',
          notes: 'Mutasi data form langsung ke fungsi server dan pembuatan endpoint API internal.',
          topics: [
            { id: 'next-4-1', title: 'Route Handlers (`app/api/.../route.ts`) untuk endpoint REST/Webhook', done: false },
            { id: 'next-4-2', title: 'Server Actions (`"use server"`) untuk form submission & validasi Zod', done: false }
          ]
        },
        {
          id: 'next-mod-5',
          title: '5. Middleware, Auth & Deployment',
          notes: 'Proteksi halaman menggunakan Next.js Middleware dan manajemen Cookie HttpOnly.',
          topics: [
            { id: 'next-5-1', title: '`middleware.ts` untuk cek sesi/token sebelum halaman dirender', done: false },
            { id: 'next-5-2', title: 'Build production (`next build`) & konfigurasi Docker / Standalone output', done: false }
          ]
        }
      ]
    },
    {
      id: 'dotnet',
      name: '.NET (C# & ASP.NET Core)',
      badge: 'Enterprise Backend',
      color: 'purple',
      icon: 'fa-solid fa-cubes',
      description: 'Ekosistem enterprise yang sangat terstruktur. Bagi programmer Laravel/Yii, arsitektur OOP, DI, dan ORM-nya akan terasa sangat familiar!',
      modules: [
        {
          id: 'net-mod-1',
          title: '1. Sintaks C# Modern & Strong Typing',
          notes: 'C# memiliki struktur class, interface, dan namespace yang sangat mirip dengan PHP modern namun dikompilasi secara statis.',
          topics: [
            { id: 'net-1-1', title: 'Tipe data nilai vs referensi, `var`, Nullable Reference Types (`string?`)', done: true },
            { id: 'net-1-2', title: 'Properties (`{ get; set; }`), Primary Constructors, dan `record` untuk DTO', done: false },
            { id: 'net-1-3', title: 'Collections (`List<T>`, `Dictionary<TKey, TValue>`, `IEnumerable<T>`)', done: false }
          ]
        },
        {
          id: 'net-mod-2',
          title: '2. OOP & Dependency Injection (Service Container)',
          notes: 'Sangat identik dengan Service Provider di Laravel (`bind`, `singleton`, `scoped`).',
          topics: [
            { id: 'net-2-1', title: 'Interface & Class Implementation di C#', done: true },
            { id: 'net-2-2', title: 'Service Lifetimes: `AddTransient`, `AddScoped`, `AddSingleton` di `Program.cs`', done: false }
          ]
        },
        {
          id: 'net-mod-3',
          title: '3. LINQ & Async/Await Programming',
          notes: 'LINQ adalah pasangan langsung dari Laravel Collection (`->where()->map()->first()`).',
          topics: [
            { id: 'net-3-1', title: 'Method LINQ: `.Where()`, `.Select()`, `.FirstOrDefault()`, `.OrderBy()`, `.Any()`', done: false },
            { id: 'net-3-2', title: 'Asynchronous Programming dengan `async`, `await`, dan `Task<T>`', done: false }
          ]
        },
        {
          id: 'net-mod-4',
          title: '4. ASP.NET Core Web API',
          notes: 'Membangun RESTful API cepat dengan Controller atau Minimal API + Swagger otomatis.',
          topics: [
            { id: 'net-4-1', title: 'Struktur `Program.cs`, `appsettings.json` (setara `.env` + `config/*.php`)', done: false },
            { id: 'net-4-2', title: 'API Controller, Attribute Routing (`[HttpGet]`, `[HttpPost]`), dan `IActionResult`', done: false },
            { id: 'net-4-3', title: 'Model Validation dengan Data Annotations / FluentValidation', done: false }
          ]
        },
        {
          id: 'net-mod-5',
          title: '5. Entity Framework Core (EF Core)',
          notes: 'ORM resmi .NET yang berperan persis seperti Eloquent ORM / Yii ActiveRecord.',
          topics: [
            { id: 'net-5-1', title: '`DbContext` & `DbSet<T>` (setara Model Eloquent)', done: false },
            { id: 'net-5-2', title: 'EF Core Migrations (`dotnet ef migrations add`, `dotnet ef database update`)', done: false },
            { id: 'net-5-3', title: 'Eager Loading dengan `.Include()` (setara `Model::with()` di Laravel) & `.AsNoTracking()`', done: false }
          ]
        }
      ]
    }
  ],
  snippets: [
    {
      id: 'snip-1',
      title: 'Go (Gin): Pattern Handler -> Service + JSON Binding',
      category: 'Golang',
      tags: ['gin', 'handler', 'validation', 'laravel-controller'],
      description: 'Padanan Controller + FormRequest Laravel di Golang Gin dengan error handling yang rapi.',
      code: `type CreateServerRequest struct {
    Hostname string \`json:"hostname" binding:"required,min=3"\`
    IP       string \`json:"ip" binding:"required,ip"\`
}

func (h *ServerHandler) Create(c *gin.Context) {
    var req CreateServerRequest
    if err := c.ShouldBindJSON(&req); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    server, err := h.service.RegisterServer(c.Request.Context(), req)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menyimpan server"})
        return
    }

    c.JSON(http.StatusCreated, gin.H{"data": server})
}`
    },
    {
      id: 'snip-2',
      title: 'Go: Worker Pool / Periodic Ticker dengan Context Cancellation',
      category: 'Golang',
      tags: ['goroutine', 'channel', 'context', 'worker'],
      description: 'Pola menjalankan background job secara berkala yang bisa dihentikan dengan aman (Graceful Shutdown).',
      code: `func StartMetricsCollector(ctx context.Context, interval time.Duration) {
    ticker := time.NewTicker(interval)
    defer ticker.Stop()

    for {
        select {
        case <-ctx.Done():
            log.Println("Worker dihentikan dengan aman...")
            return
        case <-ticker.C:
            collectAndBroadcastMetrics()
        }
    }
}`
    },
    {
      id: 'snip-3',
      title: 'React + TS: Typed Custom Hook dengan TanStack Query',
      category: 'React TS',
      tags: ['react-query', 'typescript', 'hooks', 'api'],
      description: 'Cara bersih mengambil data API lengkap dengan tipe TypeScript, loading state, dan auto-refresh.',
      code: `import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';

export interface ServerNode {
  id: string;
  hostname: string;
  cpuUsage: number;
  status: 'online' | 'offline';
}

export function useServerNodes() {
  return useQuery<ServerNode[], Error>({
    queryKey: ['servers', 'list'],
    queryFn: async () => {
      const { data } = await apiClient.get<{ data: ServerNode[] }>('/api/v1/servers');
      return data.data;
    },
    refetchInterval: 10000, // Auto refresh tiap 10 detik
  });
}`
    },
    {
      id: 'snip-4',
      title: '.NET C# vs Laravel: LINQ & EF Core Eager Loading',
      category: '.NET',
      tags: ['csharp', 'ef-core', 'linq', 'eloquent'],
      description: 'Perbandingan query Eloquent `Server::with("alerts")->where("is_active", true)->get()` di C# EF Core.',
      code: `// Di ASP.NET Core Repository / Service:
public async Task<List<ServerDto>> GetActiveServersAsync(CancellationToken ct)
{
    return await _dbContext.Servers
        .AsNoTracking() // Optimasi read-only (cepat!)
        .Include(s => s.Alerts) // Setara ::with('alerts') di Laravel
        .Where(s => s.IsActive)
        .OrderByDescending(s => s.CreatedAt)
        .Select(s => new ServerDto(s.Id, s.Hostname, s.Alerts.Count))
        .ToListAsync(ct);
}`
    },
    {
      id: 'snip-5',
      title: 'AI Prompt: Bedah Kode Baru dengan Analogi Laravel/Yii',
      category: 'AI Prompt',
      tags: ['prompt', 'learning', 'analogy', 'debugging'],
      description: 'Gunakan prompt ini saat meminta AI menjelaskan kode Go, React TS, Next.js, atau .NET.',
      code: `Saya adalah Web Developer berpengalaman di PHP (Laravel & Yii2) yang sedang mendalami [Golang / React TypeScript / Next.js / .NET].

Tolong jelaskan kode/konsep berikut:
1. Apa fungsi utamanya dan bagaimana alur eksekusinya langkah demi langkah?
2. Apa padanan konsepnya di Laravel atau Yii2 agar saya langsung paham secara arsitektur?
3. Apa best practice atau jebakan (pitfall) yang harus saya hindari?`
    },
    {
      id: 'snip-6',
      title: 'AI Prompt: Code Review & Refactoring Sebelum Commit',
      category: 'AI Prompt',
      tags: ['prompt', 'review', 'clean-code', 'security'],
      description: 'Prompt untuk mengecek kualitas kode Go / TypeScript sebelum masuk ke repository.',
      code: `Tolong review perubahan kode saya di atas sebagai Senior Engineer:
1. Cek potensi Race Condition / Memory Leak (untuk Goroutine atau React useEffect).
2. Pastikan Type Safety (tidak ada tipe 'any' tersembunyi di TypeScript atau nil pointer dereference di Go).
3. Berikan saran refactoring yang tetap sederhana (KISS) tanpa over-engineering.`
    }
  ]
};

// Concept Bridge Static Data (Laravel/Yii -> Go, React TS, Next.js, .NET)
const CONCEPT_BRIDGE_DATA = [
  {
    aspect: 'Routing & Endpoint',
    laravel: 'routes/api.php\nRoute::get("/nodes", [NodeController::class, "index"]);',
    golang: 'Gin Router\nr.GET("/nodes", nodeHandler.Index)',
    reactNext: 'Next.js App Router\napp/nodes/page.tsx (UI)\napp/api/nodes/route.ts (API)',
    dotnet: 'ASP.NET Core Controller\n[HttpGet("nodes")]\npublic async Task<IActionResult> Index()'
  },
  {
    aspect: 'Request Validation',
    laravel: 'FormRequest Class\n$request->validate(["ip" => "required|ip"]);',
    golang: 'Struct Binding Tags\ntype Req struct {\n  IP string `binding:"required,ip"`\n}',
    reactNext: 'Zod + React Hook Form\nz.object({ ip: z.string().ip() })',
    dotnet: 'Data Annotations / FluentValidation\n[Required, RegularExpression(...)]\npublic string Ip { get; set; }'
  },
  {
    aspect: 'Dependency Injection',
    laravel: 'Service Container (AppServiceProvider)\n$this->app->singleton(MetricService::class);',
    golang: 'Explicit Constructor Wiring di main.go\nrepo := NewRepo(db)\nsvc := NewService(repo)',
    reactNext: 'React Context Provider / Custom Hooks\n<AuthContext.Provider value={...}>',
    dotnet: 'Built-in DI Container (Program.cs)\nbuilder.Services.AddScoped<IMetricService, MetricService>();'
  },
  {
    aspect: 'Database & ORM',
    laravel: 'Eloquent ORM / Yii ActiveRecord\nUser::with("roles")->where("active", 1)->get();',
    golang: 'sqlx / pgx / GORM\ndb.Select(&users, "SELECT * FROM users WHERE active=$1", true)',
    reactNext: 'Prisma / Drizzle (di Next.js Server)\nawait prisma.user.findMany({ include: { roles: true } })',
    dotnet: 'Entity Framework Core (LINQ)\nawait _db.Users.Include(u => u.Roles).Where(u => u.Active).ToListAsync();'
  },
  {
    aspect: 'Background Jobs & Async',
    laravel: 'Laravel Queue + Horizon / Redis\nProcessMetricJob::dispatch($payload);',
    golang: 'Goroutine + Channel Worker Pool\ngo worker.Process(ctx, payloadChan)',
    reactNext: 'Async Web API / Web Workers / TanStack Query Mutation',
    dotnet: 'IHostedService / BackgroundService + Channel<T> / Hangfire'
  },
  {
    aspect: 'Environment & Config',
    laravel: '.env + config/app.php\nconfig("services.redis.host")',
    golang: '.env + os.Getenv / Viper Struct Config\ncfg.RedisHost',
    reactNext: '.env.local\nprocess.env.NEXT_PUBLIC_API_URL (Vite: import.meta.env.VITE_*)',
    dotnet: 'appsettings.json + IConfiguration / IOptions<T>'
  },
  {
    aspect: 'Error Handling',
    laravel: 'try / catch (Exception $e) + App\\Exceptions\\Handler',
    golang: 'Explicit Return Value\nres, err := svc.Do()\nif err != nil { return err }',
    reactNext: 'Error Boundary (error.tsx) + TanStack Query isError state',
    dotnet: 'try / catch + Global Exception Handler Middleware (IExceptionHandler)'
  }
];

// Application Runtime State
let state = loadState();
let activeTab = 'dashboard';
let activeRoadmapStack = 'golang';
let snippetFilterCategory = 'ALL';
let snippetSearchQuery = '';

// Pomodoro Timer State
let timerSeconds = 25 * 60;
let timerInitialMinutes = 25;
let timerInterval = null;
let isTimerRunning = false;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_STATE);
    const parsed = JSON.parse(raw);
    return {
      ...structuredClone(DEFAULT_STATE),
      ...parsed
    };
  } catch (e) {
    console.error('Gagal memuat state dari localStorage:', e);
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateGlobalStats();
  } catch (e) {
    console.error('Gagal menyimpan state:', e);
  }
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const el = document.createElement('div');
  const bgClass = type === 'success' ? 'bg-emerald-600/95 border-emerald-400' : 'bg-indigo-600/95 border-indigo-400';
  el.className = `toast-msg flex items-center gap-2.5 px-4 py-3 rounded-lg border text-white text-sm font-medium shadow-xl ${bgClass}`;
  el.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i><span>${escapeHtml(message)}</span>`;
  container.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.25s ease';
    setTimeout(() => el.remove(), 250);
  }, 2600);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Calculate Progress per Roadmap Stack
function getStackProgress(roadmap) {
  let total = 0;
  let completed = 0;
  roadmap.modules.forEach(m => {
    m.topics.forEach(t => {
      total++;
      if (t.done) completed++;
    });
  });
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { total, completed, percent };
}

function getOverallProgress() {
  let total = 0;
  let completed = 0;
  state.roadmaps.forEach(r => {
    const p = getStackProgress(r);
    total += p.total;
    completed += p.completed;
  });
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { total, completed, percent };
}

// Navigation
function switchTab(tabId) {
  activeTab = tabId;
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  document.querySelectorAll('.tab-section').forEach(sec => {
    sec.classList.toggle('hidden', sec.id !== `tab-${tabId}`);
  });
  if (tabId === 'dashboard') renderDashboard();
  if (tabId === 'roadmap') renderRoadmap();
  if (tabId === 'bridge') renderBridge();
  if (tabId === 'snippets') renderSnippets();
}

// Header & Sidebar Stats
function updateGlobalStats() {
  const overall = getOverallProgress();
  const overallEl = document.getElementById('sidebar-overall-percent');
  const overallBar = document.getElementById('sidebar-overall-bar');
  const streakEl = document.getElementById('header-streak-count');
  const pomoEl = document.getElementById('header-pomo-count');

  if (overallEl) overallEl.textContent = `${overall.percent}% (${overall.completed}/${overall.total})`;
  if (overallBar) overallBar.style.width = `${overall.percent}%`;
  if (streakEl) streakEl.textContent = `${state.profile.streakDays} Hari`;
  if (pomoEl) pomoEl.textContent = `${state.profile.pomodoroCompleted} Sesi`;
}

// ================= DASHBOARD RENDERING =================
function renderDashboard() {
  updateGlobalStats();

  // Today's Focus
  const focusInput = document.getElementById('today-focus-input');
  if (focusInput && document.activeElement !== focusInput) {
    focusInput.value = state.profile.todayFocus || '';
  }

  // Stack Overview Cards
  const stackGrid = document.getElementById('dashboard-stack-cards');
  if (stackGrid) {
    const colorMap = {
      cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500', border: 'border-cyan-500/30', badge: 'bg-cyan-500/10 text-cyan-300' },
      blue: { text: 'text-sky-400', bg: 'bg-sky-500', border: 'border-sky-500/30', badge: 'bg-sky-500/10 text-sky-300' },
      indigo: { text: 'text-indigo-400', bg: 'bg-indigo-500', border: 'border-indigo-500/30', badge: 'bg-indigo-500/10 text-indigo-300' },
      purple: { text: 'text-purple-400', bg: 'bg-purple-500', border: 'border-purple-500/30', badge: 'bg-purple-500/10 text-purple-300' }
    };

    stackGrid.innerHTML = state.roadmaps.map(r => {
      const prog = getStackProgress(r);
      const c = colorMap[r.color] || colorMap.indigo;
      return `
        <div class="glass-card glass-card-hover rounded-xl p-5 cursor-pointer" onclick="openStackRoadmap('${r.id}')">
          <div class="flex items-start justify-between mb-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-slate-800/90 border ${c.border} flex items-center justify-center ${c.text} text-lg">
                <i class="${r.icon}"></i>
              </div>
              <div>
                <h3 class="font-semibold text-white text-base">${escapeHtml(r.name)}</h3>
                <span class="text-xs px-2 py-0.5 rounded-full ${c.badge}">${escapeHtml(r.badge)}</span>
              </div>
            </div>
            <span class="text-lg font-bold ${c.text}">${prog.percent}%</span>
          </div>
          <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-2">
            <div class="${c.bg} h-full progress-bar-fill" style="width: ${prog.percent}%"></div>
          </div>
          <div class="flex justify-between text-xs text-slate-400">
            <span>${prog.completed} dari ${prog.total} topik selesai</span>
            <span class="text-indigo-400 hover:underline">Buka Modul &rarr;</span>
          </div>
        </div>
      `;
    }).join('');
  }

  // Daily Checklist
  const listEl = document.getElementById('daily-checklist-container');
  const countEl = document.getElementById('daily-checklist-counter');
  if (listEl) {
    const doneCount = state.dailyChecklist.filter(i => i.done).length;
    if (countEl) countEl.textContent = `${doneCount}/${state.dailyChecklist.length} Selesai`;

    if (state.dailyChecklist.length === 0) {
      listEl.innerHTML = `<p class="text-sm text-slate-400 py-4 text-center">Belum ada ceklis harian. Tambahkan target belajar di bawah!</p>`;
    } else {
      listEl.innerHTML = state.dailyChecklist.map(item => `
        <div class="flex items-center justify-between gap-3 p-3 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition">
          <label class="flex items-center gap-3 cursor-pointer flex-1">
            <input type="checkbox" class="custom-checkbox" ${item.done ? 'checked' : ''} onchange="toggleDailyCheck('${item.id}')" />
            <span class="text-sm ${item.done ? 'line-through text-slate-500' : 'text-slate-200'}">${escapeHtml(item.text)}</span>
          </label>
          <div class="flex items-center gap-2">
            <span class="text-xs px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">${escapeHtml(item.category)}</span>
            <button onclick="deleteDailyCheck('${item.id}')" class="text-slate-500 hover:text-rose-400 px-1.5 py-1 transition" title="Hapus">
              <i class="fa-solid fa-trash-can text-xs"></i>
            </button>
          </div>
        </div>
      `).join('');
    }
  }
}

function openStackRoadmap(stackId) {
  activeRoadmapStack = stackId;
  switchTab('roadmap');
}

function saveTodayFocus() {
  const input = document.getElementById('today-focus-input');
  if (!input) return;
  state.profile.todayFocus = input.value.trim();
  saveState();
  showToast('Fokus belajar hari ini disimpan!');
}

function toggleDailyCheck(id) {
  const item = state.dailyChecklist.find(i => i.id === id);
  if (item) {
    item.done = !item.done;
    saveState();
    renderDashboard();
  }
}

function addDailyCheck(e) {
  e.preventDefault();
  const textInput = document.getElementById('new-daily-text');
  const catInput = document.getElementById('new-daily-category');
  const text = textInput.value.trim();
  if (!text) return;

  state.dailyChecklist.push({
    id: 'dc-' + Date.now(),
    text,
    category: catInput.value || 'Golang',
    done: false
  });
  textInput.value = '';
  saveState();
  renderDashboard();
  showToast('Target harian ditambahkan!');
}

function deleteDailyCheck(id) {
  state.dailyChecklist = state.dailyChecklist.filter(i => i.id !== id);
  saveState();
  renderDashboard();
}

function resetDailyChecklist() {
  state.dailyChecklist.forEach(i => { i.done = false; });
  state.profile.streakDays += 1;
  saveState();
  renderDashboard();
  showToast('Ceklis di-reset untuk hari baru! Streak +1 hari 🔥');
}

// ================= POMODORO TIMER =================
function updateTimerDisplay() {
  const min = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
  const sec = String(timerSeconds % 60).padStart(2, '0');
  const el = document.getElementById('timer-display');
  if (el) el.textContent = `${min}:${sec}`;
}

function setTimerMode(minutes) {
  pauseTimer();
  timerInitialMinutes = minutes;
  timerSeconds = minutes * 60;
  updateTimerDisplay();
}

function toggleTimer() {
  if (isTimerRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  if (isTimerRunning) return;
  isTimerRunning = true;
  const btn = document.getElementById('timer-toggle-btn');
  if (btn) {
    btn.innerHTML = '<i class="fa-solid fa-pause mr-1.5"></i>Jeda';
    btn.className = 'px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-sm font-medium transition';
  }
  timerInterval = setInterval(() => {
    if (timerSeconds > 0) {
      timerSeconds--;
      updateTimerDisplay();
    } else {
      pauseTimer();
      state.profile.pomodoroCompleted += 1;
      saveState();
      renderDashboard();
      showToast('Sesi Fokus Selesai! Istirahat sejenak ☕', 'success');
      timerSeconds = timerInitialMinutes * 60;
      updateTimerDisplay();
    }
  }, 1000);
}

function pauseTimer() {
  isTimerRunning = false;
  if (timerInterval) clearInterval(timerInterval);
  const btn = document.getElementById('timer-toggle-btn');
  if (btn) {
    btn.innerHTML = '<i class="fa-solid fa-play mr-1.5"></i>Mulai';
    btn.className = 'px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition';
  }
}

function resetTimer() {
  pauseTimer();
  timerSeconds = timerInitialMinutes * 60;
  updateTimerDisplay();
}

// ================= ROADMAP & MODULES =================
function renderRoadmap() {
  const tabsEl = document.getElementById('roadmap-stack-tabs');
  const contentEl = document.getElementById('roadmap-modules-container');
  if (!tabsEl || !contentEl) return;

  tabsEl.innerHTML = state.roadmaps.map(r => {
    const prog = getStackProgress(r);
    const isActive = r.id === activeRoadmapStack;
    return `
      <button onclick="selectRoadmapStack('${r.id}')"
        class="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-medium transition ${
          isActive
            ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg'
            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
        }">
        <i class="${r.icon}"></i>
        <span>${escapeHtml(r.name)}</span>
        <span class="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">${prog.percent}%</span>
      </button>
    `;
  }).join('');

  const currentStack = state.roadmaps.find(r => r.id === activeRoadmapStack) || state.roadmaps[0];
  const stackProg = getStackProgress(currentStack);

  contentEl.innerHTML = `
    <div class="glass-card rounded-xl p-5 mb-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
        <div>
          <div class="flex items-center gap-2.5">
            <h2 class="text-xl font-bold text-white">${escapeHtml(currentStack.name)}</h2>
            <span class="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">${escapeHtml(currentStack.badge)}</span>
          </div>
          <p class="text-sm text-slate-400 mt-1">${escapeHtml(currentStack.description)}</p>
        </div>
        <div class="text-right">
          <span class="text-2xl font-bold text-emerald-400">${stackProg.percent}%</span>
          <p class="text-xs text-slate-400">${stackProg.completed} dari ${stackProg.total} sub-topik dikuasai</p>
        </div>
      </div>
      <div class="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
        <div class="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full progress-bar-fill" style="width: ${stackProg.percent}%"></div>
      </div>
    </div>

    <div class="space-y-4">
      ${currentStack.modules.map(mod => {
        const modTotal = mod.topics.length;
        const modDone = mod.topics.filter(t => t.done).length;
        return `
          <div class="glass-card rounded-xl p-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800">
              <div>
                <h3 class="font-semibold text-white text-base">${escapeHtml(mod.title)}</h3>
                <p class="text-xs text-amber-300/90 mt-1"><i class="fa-regular fa-lightbulb mr-1"></i>${escapeHtml(mod.notes)}</p>
              </div>
              <span class="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 self-start sm:self-center shrink-0">
                ${modDone}/${modTotal} Selesai
              </span>
            </div>

            <div class="space-y-2.5 mb-4">
              ${mod.topics.map(t => `
                <label class="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 cursor-pointer transition">
                  <input type="checkbox" class="custom-checkbox mt-0.5" ${t.done ? 'checked' : ''}
                    onchange="toggleRoadmapTopic('${currentStack.id}', '${mod.id}', '${t.id}')" />
                  <span class="text-sm ${t.done ? 'line-through text-slate-500' : 'text-slate-200'}">${escapeHtml(t.title)}</span>
                </label>
              `).join('')}
            </div>

            <form onsubmit="addCustomRoadmapTopic(event, '${currentStack.id}', '${mod.id}')" class="flex gap-2">
              <input type="text" id="new-topic-${mod.id}" placeholder="Tambah sub-topik atau catatan praktik baru di modul ini..."
                class="flex-1 bg-slate-900/90 border border-slate-700/80 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500" />
              <button type="submit" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-medium transition">
                + Tambah Topik
              </button>
            </form>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function selectRoadmapStack(stackId) {
  activeRoadmapStack = stackId;
  renderRoadmap();
}

function toggleRoadmapTopic(stackId, modId, topicId) {
  const stack = state.roadmaps.find(r => r.id === stackId);
  if (!stack) return;
  const mod = stack.modules.find(m => m.id === modId);
  if (!mod) return;
  const topic = mod.topics.find(t => t.id === topicId);
  if (!topic) return;

  topic.done = !topic.done;
  saveState();
  renderRoadmap();
}

function addCustomRoadmapTopic(e, stackId, modId) {
  e.preventDefault();
  const input = document.getElementById(`new-topic-${modId}`);
  if (!input || !input.value.trim()) return;

  const stack = state.roadmaps.find(r => r.id === stackId);
  const mod = stack?.modules.find(m => m.id === modId);
  if (!mod) return;

  mod.topics.push({
    id: `${modId}-${Date.now()}`,
    title: input.value.trim(),
    done: false
  });
  input.value = '';
  saveState();
  renderRoadmap();
  showToast('Sub-topik baru berhasil ditambahkan!');
}

// ================= CONCEPT BRIDGE RENDERING =================
function renderBridge() {
  const tbody = document.getElementById('bridge-table-body');
  if (!tbody) return;

  tbody.innerHTML = CONCEPT_BRIDGE_DATA.map(row => `
    <tr class="border-b border-slate-800/80 hover:bg-slate-900/40 transition align-top">
      <td class="p-3.5 font-semibold text-indigo-300 text-sm whitespace-nowrap">${escapeHtml(row.aspect)}</td>
      <td class="p-3.5"><pre class="code-block text-xs">${escapeHtml(row.laravel)}</pre></td>
      <td class="p-3.5"><pre class="code-block text-xs text-cyan-300">${escapeHtml(row.golang)}</pre></td>
      <td class="p-3.5"><pre class="code-block text-xs text-sky-300">${escapeHtml(row.reactNext)}</pre></td>
      <td class="p-3.5"><pre class="code-block text-xs text-purple-300">${escapeHtml(row.dotnet)}</pre></td>
    </tr>
  `).join('');
}

// ================= SNIPPETS & AI PROMPTS =================
function renderSnippets() {
  const container = document.getElementById('snippets-grid');
  if (!container) return;

  const filtered = state.snippets.filter(s => {
    const matchCat = snippetFilterCategory === 'ALL' || s.category === snippetFilterCategory;
    const q = snippetSearchQuery.toLowerCase();
    const matchQuery = !q ||
      s.title.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.code.toLowerCase().includes(q) ||
      (s.tags && s.tags.some(t => t.toLowerCase().includes(q)));
    return matchCat && matchQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full glass-card rounded-xl p-8 text-center text-slate-400">
        Tidak ada snippet atau prompt yang cocok dengan filter pencarian.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(s => `
    <div class="glass-card rounded-xl p-5 flex flex-col justify-between">
      <div>
        <div class="flex items-start justify-between gap-2 mb-2">
          <div>
            <span class="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-medium">
              ${escapeHtml(s.category)}
            </span>
            <h3 class="font-semibold text-white text-base mt-2">${escapeHtml(s.title)}</h3>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <button onclick="copySnippet('${s.id}')" class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs transition" title="Copy Code">
              <i class="fa-regular fa-copy mr-1"></i>Salin
            </button>
            <button onclick="deleteSnippet('${s.id}')" class="px-2 py-1.5 rounded-lg bg-slate-800 hover:bg-rose-600 text-slate-400 hover:text-white text-xs transition" title="Hapus">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
        <p class="text-xs text-slate-400 mb-3">${escapeHtml(s.description)}</p>
        <pre class="code-block mb-3 max-h-56 overflow-y-auto"><code>${escapeHtml(s.code)}</code></pre>
      </div>
      <div class="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
        ${(s.tags || []).map(tag => `<span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400">#${escapeHtml(tag)}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function setSnippetCategory(cat) {
  snippetFilterCategory = cat;
  document.querySelectorAll('.snippet-cat-btn').forEach(btn => {
    const active = btn.dataset.cat === cat;
    btn.className = `snippet-cat-btn px-3 py-1.5 rounded-lg text-xs font-medium transition ${
      active ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
    }`;
  });
  renderSnippets();
}

function onSnippetSearch(val) {
  snippetSearchQuery = val;
  renderSnippets();
}

function copySnippet(id) {
  const item = state.snippets.find(s => s.id === id);
  if (!item) return;
  navigator.clipboard.writeText(item.code).then(() => {
    showToast('Kode / Prompt berhasil disalin ke Clipboard!');
  });
}

function addSnippet(e) {
  e.preventDefault();
  const title = document.getElementById('snip-title').value.trim();
  const category = document.getElementById('snip-category').value;
  const tagsRaw = document.getElementById('snip-tags').value.trim();
  const desc = document.getElementById('snip-desc').value.trim();
  const code = document.getElementById('snip-code').value;

  if (!title || !code) return;

  const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [];
  state.snippets.unshift({
    id: 'snip-' + Date.now(),
    title,
    category,
    tags,
    description: desc || 'Catatan kode / prompt kustom.',
    code
  });

  e.target.reset();
  toggleSnippetModal(false);
  saveState();
  renderSnippets();
  showToast('Snippet / Prompt baru berhasil disimpan!');
}

function deleteSnippet(id) {
  state.snippets = state.snippets.filter(s => s.id !== id);
  saveState();
  renderSnippets();
  showToast('Snippet dihapus.', 'info');
}

function toggleSnippetModal(show) {
  const modal = document.getElementById('snippet-modal');
  if (modal) modal.classList.toggle('hidden', !show);
}

// ================= BACKUP EXPORT / IMPORT =================
function exportBackupJSON() {
  const dataStr = JSON.stringify(state, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const date = new Date().toISOString().split('T')[0];
  a.href = url;
  a.download = `dev-learning-hub-backup-${date}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Backup JSON berhasil diunduh!');
}

function importBackupJSON(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported && imported.roadmaps && imported.dailyChecklist) {
        state = imported;
        saveState();
        switchTab(activeTab);
        showToast('Data backup berhasil dipulihkan!');
      } else {
        alert('Format file JSON tidak valid.');
      }
    } catch (err) {
      alert('Gagal membaca file JSON: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function resetToDefaultData() {
  if (!confirm('Reset semua progress dan kembalikan ke kurikulum awal?')) return;
  state = structuredClone(DEFAULT_STATE);
  saveState();
  switchTab(activeTab);
  showToast('Data di-reset ke pengaturan awal.');
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  updateTimerDisplay();
  switchTab('dashboard');
});
