const ALL_BIRTHDAY_WISHES = [
    "Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday!",
    "Happy birthday! I hope all your birthday wishes and dreams come true.",
    "A wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always. Happy birthday!",
    "Another adventure filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor. Wishing you a very happy and fun-filled birthday!",
    "May the joy that you have spread in the past come back to you on this day. Wishing you a very happy birthday!",
    "Happy birthday! Your life is just about to pick up speed and blast off into the stratosphere. Wear a seat belt and be sure to enjoy the journey. Happy birthday!",
    "This birthday, I wish you abundant happiness and love. May all your dreams turn into reality and may lady luck visit your home today. Happy birthday to one of the sweetest people I’ve ever known.",
    "May you be gifted with life’s biggest joys and never-ending bliss. After all, you yourself are a gift to earth, so you deserve the best. Happy birthday.",
    "Count not the candles…see the lights they give. Count not the years, but the life you live. Wishing you a wonderful time ahead. Happy birthday.",
    "Forget the past; look forward to the future, for the best things are yet to come.",
    "Birthdays are a new start, a fresh beginning and a time to pursue new endeavors with new goals. Move forward with confidence and courage. You are a very special person. May today and all of your days be amazing!",
    "Your birthday is the first day of another 365-day journey. Be the shining thread in the beautiful tapestry of the world to make this year the best ever. Enjoy the ride.",
    "Be happy! Today is the day you were brought into this world to be a blessing and inspiration to the people around you! You are a wonderful person! May you be given more birthdays to fulfill all of your dreams!"
]

export const getBirthdayWish = (peopleString: string) => {
    return `"${ALL_BIRTHDAY_WISHES[Math.floor(Math.random()*ALL_BIRTHDAY_WISHES.length)]}"

Happy birthday ${peopleString} 🎉

Request everyone to join us in wishing Happy Birthday to our CYF Member on their birthday today.

Note: Birthday wishes are sent as per DOB updated in CYF Registration Database.\n\nTEAM CYF`
}
