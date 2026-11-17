# Деплой на GitHub Pages

Сайт настроен для [GitHub Pages](https://pages.github.com/) через GitHub Actions.

## Репозиторий `username.github.io`

Для **https://msaiid.github.io** создайте (или используйте) репозиторий с именем **`msaiid.github.io`**.  
`base` в Vite будет `/` — сайт откроется с корня домена.

## Репозиторий с другим именем

Если репозиторий, например, `portfolio`, сайт будет по адресу  
`https://msaiid.github.io/portfolio/` — workflow сам задаст `VITE_BASE_PATH`.

## Шаги

1. **GitHub → Settings → Pages → Build and deployment**
   - Source: **GitHub Actions** (не «Deploy from a branch»).

2. **Загрузите код в GitHub** (если ещё не загружен):

   ```bash
   git init -b main
   git add -A
   git commit -m "Portfolio React: initial deploy setup"
   git remote add origin https://github.com/msaiid/msaiid.github.io.git
   git push -u origin main
   ```

   Замените URL `origin`, если репозиторий другой.

3. После `push` откройте вкладку **Actions** — workflow **Deploy to GitHub Pages** соберёт и опубликует `dist`.

4. Через 1–2 минуты обновите **https://msaiid.github.io**

## Локальная проверка (как на Pages)

```bash
npm run build
set VITE_BASE_PATH=/
npx vite preview
```

## Повторный деплой

Любой `git push` в ветку `main` (или `master`) автоматически пересобирает и публикует сайт.