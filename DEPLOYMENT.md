# Deployment Guide for OgaAI Website

## Assets Setup ✅

Your videos and logos are now properly configured for Vercel deployment:

- **Location**: `/public/assets/`
- **Videos**: 
  - `OgaAI_ Smartest Staff.mp4` (Voice Agent demo)
  - `OgaAI_ Smart Finance.mp4` (Expense Tracker demo)
- **Logos**:
  - `OGA AI Logo with Indigo and Purple Gradients.png` (Light mode)
  - `OGA AI Logo with Sapphire and Violet Gradient.png` (Dark mode)

## Deploying to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Add environment variables (if needed):
   - `GEMINI_API_KEY` (if using AI features)
7. Click "Deploy"

## Important Notes

✅ **Assets are in the correct location** - All videos and images are in `/public/assets/`

✅ **Paths are correct** - Components reference assets as `/assets/filename.ext`

✅ **vercel.json configured** - Ensures proper routing for SPA

## Troubleshooting

If videos/images still don't load after deployment:

1. **Check file names** - Ensure no special characters or spaces cause issues
2. **Verify public folder** - Make sure `public/assets/` is committed to git
3. **Check browser console** - Look for 404 errors on asset paths
4. **Clear cache** - Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

## Build Locally to Test

Before deploying, test the production build locally:

```bash
npm run build
npm run preview
```

This will build and serve your app exactly as it will appear on Vercel.

## File Size Optimization (Optional)

Your video files are:
- `OgaAI_ Smartest Staff.mp4`: ~8.6 MB
- `OgaAI_ Smart Finance.mp4`: ~4.9 MB

If you experience slow loading, consider:
1. Compressing videos with HandBrake or FFmpeg
2. Using a CDN for large assets
3. Adding loading states while videos load

## Success Checklist

- [x] Assets moved to `/public/assets/`
- [x] Component paths updated to `/assets/...`
- [x] vercel.json created
- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Tested on live URL

Your website is ready to deploy! 🚀
