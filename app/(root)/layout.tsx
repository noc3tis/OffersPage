//Este layout siempre se va a mostrar en las paginas de esta carpeta
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    //El main significa que aqui va el contenido principal y el children pues es el contenido dinamico
    <main>
        SIDEBAR
        {children}
    </main>
  )
}
