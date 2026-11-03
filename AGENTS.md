<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Company contact details and nav links live in `src/lib/site.ts`; edit there so header, footer and contact page stay in sync.
- Shared site chrome (header/footer) is rendered in `src/routes/__root.tsx`; page banners use `PageHero` from `src/components/site/PageHero.tsx` for consistency.
- The contact form opens the visitor's email app (mailto) because there is no backend yet.
