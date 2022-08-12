const Layout = ({ children }) => {
	return (
		<div className="flex items-center flex-col min-h-full px-6 py-3">
			{children}
		</div>
	)
}

export default Layout;