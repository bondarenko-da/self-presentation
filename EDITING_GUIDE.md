# Инструкция по редактированию сайта

## 📁 Структура файлов для редактирования

Все основные тексты и данные находятся в папке `src/components/landing/`:

```
src/components/landing/
├── Header.tsx      # Меню навигации
├── Hero.tsx        # Главная секция с фото
├── About.tsx       # О себе
├── Skills.tsx      # Навыки и технологии
├── Experience.tsx  # Опыт работы (timeline)
├── Projects.tsx    # Проекты
├── Education.tsx   # Образование и сертификаты
├── Contact.tsx     # Контакты
└── Footer.tsx      # Подвал сайта
```

---

## 1. 📝 Редактирование текстов

### Секция "О себе" (`About.tsx`)

Найдите массив `highlights` для изменения карточек компетенций:
```typescript
const highlights = [
  {
    icon: Database,
    title: 'Архитектура DWH',
    description: 'Проектирование корпоративных хранилищ данных...',
  },
  // Добавьте новые карточки...
]
```

Основной текст находится в тегах `<p>` внутри компонента.

---

### Секция "Навыки" (`Skills.tsx`)

Редактирование категорий навыков:
```typescript
const skillCategories = [
  {
    icon: Database,
    title: 'SQL / Базы данных',
    skills: [
      { name: 'MS SQL Server (T-SQL)', level: 95 },  // level = процент заполнения
      { name: 'PostgreSQL (PL/pgSQL)', level: 90 },
      // Добавьте новые навыки...
    ],
  },
  // Добавьте новые категории...
]
```

Дополнительные навыки:
```typescript
const additionalSkills = [
  'Data Quality',
  'Data Governance',
  // Добавьте новые...
]
```

---

### Секция "Опыт работы" (`Experience.tsx`)

Добавление нового места работы:
```typescript
const experiences = [
  {
    company: 'Название компании',
    role: 'Должность',
    period: 'Месяц Год — Месяц Год',
    duration: 'X лет',
    location: 'Город',
    description: 'Краткое описание деятельности.',
    responsibilities: [
      'Обязанность 1',
      'Обязанность 2',
    ],
    achievements: [  // Опционально
      'Достижение 1',
      'Достижение 2',
    ],
    technologies: ['Tech1', 'Tech2', 'Tech3'],
  },
  // ... остальные места работы
]
```

---

### Секция "Проекты" (`Projects.tsx`)

Добавление нового проекта:
```typescript
const projects = [
  {
    name: 'Название проекта',
    title: 'Краткое описание',
    description: 'Подробное описание проекта...',
    technologies: ['Tech1', 'Tech2'],
    category: 'Enterprise DWH',  // Категория для фильтрации
  },
  // ... остальные проекты
]
```

Изменение статистики:
```typescript
{[
  { value: '12+', label: 'Проектов' },
  { value: '8+', label: 'Отраслей' },
  // ...
]}
```

---

### Секция "Образование и сертификаты" (`Education.tsx`)

#### Добавление сертификата со ссылкой:
```typescript
const certificates = [
  {
    name: 'Название сертификата',
    issuer: 'Организация',
    year: 2025,
    link: 'https://ссылка-на-сертификат.com',  // Кликабельная ссылка
  },
  // ...
]
```

#### Сертификат без ссылки:
```typescript
{
  name: 'Название сертификата',
  issuer: 'Организация',
  year: 2025,
  link: null,  // Не кликабельный
}
```

---

### Секция "Контакты" (`Contact.tsx`)

Редактирование контактов:
```typescript
const contacts = [
  {
    icon: Phone,
    label: 'Телефон',
    value: '+7 (XXX) XXX-XX-XX',
    href: 'tel:+7XXXXXXXXXX',
    note: 'WhatsApp / Telegram',  // Опционально
  },
  // ...
]
```

---

## 2. 🔗 Добавление ссылок

### Кликабельные сертификаты
В файле `Education.tsx` найдите массив `certificates` и добавьте ссылку в поле `link`:
```typescript
{
  name: 'Название',
  issuer: 'Организация',
  year: 2025,
  link: 'https://ваша-ссылка.com',
}
```

### Социальные сети в Footer
В файле `Footer.tsx` найдите секцию с иконками и добавьте:
```typescript
<a
  href="https://ваша-ссылка.com"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
>
  <Иконка className="w-5 h-5" />
</a>
```

### Кнопки в Hero секции
В файле `Hero.tsx` кнопки уже настроены. Для изменения ссылок найдите:
```typescript
<Button onClick={() => scrollToSection('contact')}>
  Связаться со мной
</Button>
```

---

## 3. 🖼️ Замена изображений

### Личное фото
Замените файл: `public/images/photo.jpg`

### Фоновые изображения
- Hero фон: `public/images/hero-bg.png`
- DWH иллюстрация: `public/images/dwh-illustration.png`
- Аналитика: `public/images/analytics.png`

### Форматы
Поддерживаемые форматы: `.jpg`, `.png`, `.webp`, `.svg`

---

## 4. 🚀 Публикация изменений

### Через GitHub веб-интерфейс:
1. Откройте репозиторий: https://github.com/bondarenko-da/self-presentation
2. Найдите нужный файл в `src/components/landing/`
3. Нажмите ✏️ (Edit) для редактирования
4. Внесите изменения
5. Нажмите "Commit changes"
6. Vercel автоматически задеплоит изменения

### Локально:
```bash
# 1. Клонируйте репозиторий
git clone https://github.com/bondarenko-da/self-presentation.git

# 2. Перейдите в папку
cd self-presentation

# 3. Установите зависимости
bun install

# 4. Запустите локально для проверки
bun run dev

# 5. После изменений - закоммитьте и запушьте
git add .
git commit -m "Описание изменений"
git push
```

---

## 5. ⚡ Быстрые изменения

### Изменить количество проектов
Файл: `Projects.tsx`, строка ~170:
```typescript
{ value: '12+', label: 'Проектов' },
```

### Изменить статус "Открыт к предложениям"
Файл: `Hero.tsx`, найдите Badge:
```typescript
<Badge variant="secondary" className="...">
  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
  Открыт к предложениям
</Badge>
```

### Изменить контактную информацию
Файлы: `Hero.tsx`, `Contact.tsx`, `Footer.tsx`

---

## 6. 🎨 Цветовая схема

Основные цвета определены в `src/app/globals.css`:
- `--primary` - основной цвет (синий)
- `--secondary` - вторичный цвет
- `--accent` - акцентный цвет

Для изменения основного цвета найдите в `globals.css`:
```css
--primary: oklch(0.45 0.15 250);  /* Измените это значение */
```

---

## Нужна помощь?

Если возникнут вопросы или нужно добавить новую функциональность - обращайтесь!
