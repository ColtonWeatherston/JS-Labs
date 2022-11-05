class Hotel {
	constructor(name, city, rooms, booked, gym) {
		this.name = name;
		this.location = city;
		this.rooms = rooms;
		this.booked = booked;
		this.gym = gym;
		this.roomTypes = ["twin", "double", "suite"];
		this.swimmingPool = true;
		this.airportShuttle = false;
		this.restaurants = new Map([["Harolds", "American"], ["Kyoto", "Japanese"], ["Relax", "Fusion"]]);
	}
	
	get _name() {
		return this.name;
	}
	get _location() {
		return this.location;
	}
	get _rooms() {
		return this.rooms;
	}
	get _booked() {
		return this.booked;
	}
	get _gym() {
		return this.gym;
	}
	get _swimmingPool() {
		return this.swimmingPool;
	}
	get _roomTypes() {
		return this.roomTypes;
	}

	set _name(nameInput) {
		this.name = nameInput;
	}
	set _location(location) {
		this.location = location;
	}
	set _rooms(rooms) {
		this.rooms = rooms;
	}
	set _booked(booked) {
		this.booked = booked;
	}
	set _gym(gym) {
		this.gym = gym;
	}

	bookRoom() {
		this.booked++;
		document.getElementById("part1").insertAdjacentHTML("beforeend", "<br><br>You have booked a room. There are now " + (this._rooms - this._booked) + " rooms available today.");
	}

	cancelRoom() {
		this.booked--;
		document.getElementById("part1").insertAdjacentHTML("beforeend", "<br><br>You have cancelled your room. There are now " + (this._rooms - this._booked) + " rooms available today.");
	}

	addRoomType(type) {
		this.roomTypes.push(type);
	}
}

class Resort extends Hotel {
	constructor(name, city, rooms, booked, gym, resortType, beachFront, kidsClub) {
		super(name, city, rooms, booked, gym);
		this.resortType = resortType;
		this.beachFront = beachFront;
		this.kidsClub = kidsClub;
	}

	get _resortType() {
		return this.resortType;
	}
	get _beachFront() {
		return this.beachFront;
	}
	get _kidsClub() {
		return this.kidsClub;
	}

	set _resortType(resortType) {
		this.resortType = resortType;
	}
	set _beachFront(beachFront) {
		this.beachFront = beachFront;
	}
	set _kidsClub(kidsClub) {
		this.kidsClub = kidsClub;
	}
}

const hotel = new Hotel("The Crystal Lodge", "Whister", 200, 150, true);
document.getElementById("part1").insertAdjacentHTML("beforeend", "The hotel is " + hotel._name + ", located in " + hotel._location);
document.getElementById("part1").insertAdjacentHTML("beforeend", "<br><br>There are " + (hotel._rooms - hotel._booked) + " rooms available today");
hotel.bookRoom();
hotel.cancelRoom();
hotel.addRoomType("honeymoon");
document.getElementById("part1").insertAdjacentHTML("beforeend", "<br><br>The available room types are: ");
var roomTypes = hotel._roomTypes;
for (let i = 0; i < roomTypes.length; i++) {
	if (i != roomTypes.length-1) {
		document.getElementById("part1").insertAdjacentHTML("beforeend", roomTypes[i] + ", ");
	}
	else {
		document.getElementById("part1").insertAdjacentHTML("beforeend", roomTypes[i]);
	}
}
document.getElementById("part1").insertAdjacentHTML("beforeend", "<br><br><b>Hotel has a swimming pool? </b>" + hotel._swimmingPool);
document.getElementById("part1").insertAdjacentHTML("beforeend", "<br><br><b>Hotel has 3 restaurants each with a different theme.</b> They are:");
for (let [key, value] of hotel.restaurants.entries()) {
	document.getElementById("part1").insertAdjacentHTML("beforeend", "<br><br><b>" + key + ":</b> " + value);
}

const resort = new Resort("Hyatt Ziva Cap Cana", "Punta Cana", 400, 275, true, "family", true, true);
document.getElementById("part2").insertAdjacentHTML("beforeend", "<b>A new Resort has been created:</b> " + resort._name + " located in " + resort._location + ". It is a " + resort._resortType + " resort.");
document.getElementById("part2").insertAdjacentHTML("beforeend", "<br><br><b>Is it on a beach?</b> " + resort._beachFront);
document.getElementById("part2").insertAdjacentHTML("beforeend", "<br><br><b>Does it have a kids club?</b> " + resort._kidsClub);
document.getElementById("part2").insertAdjacentHTML("beforeend", "<br><br>Oh No! The kids club is being renovated!");
resort._kidsClub = false;
document.getElementById("part2").insertAdjacentHTML("beforeend", "<br><br><b>Does it have a kids club?</b> " + resort._kidsClub);