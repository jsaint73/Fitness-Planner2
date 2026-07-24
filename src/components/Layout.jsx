export default function Layout(props) {

    const { children } = props;
    const header = (
        <header>
            <h1 className="text-gradient">Fitness Planner</h1>
            <p><strong>Thirty excercises for beginners</strong></p>
        </header>
    )

     const footer = (
        <footer>
            <p>&copy; 2023 Fitness Planner. All rights reserved.</p>
            {/* remember to add a link that goes to portfolio page */}
        </footer>
    )


  return (
    <>
        {header}
        {children}
        {footer}
    </>
  );
}
