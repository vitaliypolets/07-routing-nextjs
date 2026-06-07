import type { ReactNode } from 'react';

interface NotesLayoutProps {
  children: ReactNode;
}

function NotesLayout({ children }: NotesLayoutProps) {
  return <>{children}</>;
}

export default NotesLayout;