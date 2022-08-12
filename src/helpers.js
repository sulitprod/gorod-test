const formatDate = (date) => {
    return new Intl.DateTimeFormat('ru-RU', { 
        dateStyle: 'short', 
        timeStyle: 'short' 
    }).format(new Date(date))
}

export { formatDate }