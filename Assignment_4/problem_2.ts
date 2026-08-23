interface Booking {
    name: string
    guests: number
    time: number
}

const formatBookingConfirmation = (booking: Booking):string => {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
};