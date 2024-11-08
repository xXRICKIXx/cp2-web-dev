function filterEvents() {
    var input = document.getElementById('event-filter').value;
    var events = document.querySelectorAll('.event');
    
    events.forEach(function(event) {
        var eventDate = event.getAttribute('data-date');
        
        // Verifica se a data do evento corresponde à data selecionada
        if (input && eventDate !== input) {
            event.style.display = 'none';
        } else {
            event.style.display = 'block';
        }
    });
}