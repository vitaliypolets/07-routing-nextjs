import css from './layout.module.css';

interface FilterLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

function FilterLayout({ children, sidebar }: FilterLayoutProps) {
  return (
    <main>
      <div className={css.container}>
        <aside className={css.sidebar}>{sidebar}</aside>
        <section className={css.content}>{children}</section>
      </div>
    </main>
  );
}

export default FilterLayout;