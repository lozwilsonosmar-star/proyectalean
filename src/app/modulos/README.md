
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
# 🧩 Dashboard - Rol: Admin

## 📁 Estructura del submódulo

- `dashboard.component.ts` → Componente standalone
- `dashboard.component.html` → Vista principal
- `dashboard.component.scss` → Estilos encapsulados
- `dashboard.routing.ts` → Rutas locales del submódulo

## 🚀 Funcionalidad

Este componente representa el panel principal del rol **Admin**, con acceso a métricas clave, navegación rápida y visualización personalizada.

## 🛠️ Técnicas aplicadas

- Componente standalone (`standalone: true`)
- Lazy loading con `loadComponent`
- Importación de `CommonModule` y módulos compartidos
- Estilos sobrescritos para neutralizar herencias globales (AdminLTE)
- Encapsulamiento visual absoluto

## 🔗 Ruta asociada

```ts
{
  path: 'admin/dashboard',
  loadComponent: () => import('./dashboard.component').then(m => m.DashboardComponent)
}

🛠️ Técnicas
- Standalone Component (standalone: true)
- Lazy loading con loadComponent
- Encapsulamiento visual absoluto


----------------------------------------------------------------------------------------------------------------------------------------------------------------



----------------------------------------------------------------------------------------------------------------------------------------------------------------

### 📘 `README.md` para `dashboard` del rol **operario**

```markdown
# 🧩 Dashboard - Rol: Operario

## 📁 Estructura

- `dashboard.component.ts`
- `dashboard.component.html`
- `dashboard.component.scss`
- `dashboard.routing.ts`

## 🚀 Funcionalidad

Panel operativo para tareas diarias, visualización de órdenes, y acceso rápido a herramientas de ejecución.

## 🔗 Ruta

```ts
{
  path: 'operario/dashboard',
  loadComponent: () => import('./dashboard.component').then(m => m.DashboardComponent)
}

🛠️ Técnicas
- Standalone Component
- Lazy loading
- Estilos encapsulados

----------------------------------------------------------------------------------------------------------------------------------------------------------------


----------------------------------------------------------------------------------------------------------------------------------------------------------------

---

### 📘 `README.md` para `dashboard` del rol **cliente**

```markdown
# 🧩 Dashboard - Rol: Cliente

## 📁 Estructura

- `dashboard.component.ts`
- `dashboard.component.html`
- `dashboard.component.scss`
- `dashboard.routing.ts`

## 🚀 Funcionalidad

Vista personalizada para el cliente, con acceso a historial, seguimiento de pedidos y notificaciones.

## 🔗 Ruta

```ts
{
  path: 'cliente/dashboard',
  loadComponent: () => import('./dashboard.component').then(m => m.DashboardComponent)
}

🛠️ Técnicas
- Standalone Component
- Lazy loading
- Visualización adaptada al usuario fina
