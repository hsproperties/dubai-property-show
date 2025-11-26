import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Building2,
  ChevronLeft,
  ChevronRight,
  Plus,
  Bell,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const EventCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const events = [
    {
      id: 1,
      title: "Emaar Properties Showcase",
      date: "2025-01-15",
      time: "10:00 AM - 6:00 PM",
      location: "Booth A1-A5",
      type: "Developer Showcase",
      attendees: 250,
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Exclusive launch of new downtown projects",
    },
    {
      id: 2,
      title: "Investment Seminar: Dubai Marina",
      date: "2025-01-18",
      time: "2:00 PM - 4:00 PM",
      location: "Conference Hall 1",
      type: "Educational",
      attendees: 150,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Expert insights on waterfront investments",
    },
    {
      id: 3,
      title: "VIP Property Tour",
      date: "2025-01-22",
      time: "9:00 AM - 12:00 PM",
      location: "Meet at Reception",
      type: "Tour",
      attendees: 30,
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Exclusive tour of Palm Jumeirah properties",
    },
    {
      id: 4,
      title: "DAMAC Properties Launch",
      date: "2025-01-25",
      time: "11:00 AM - 7:00 PM",
      location: "Booth B1-B3",
      type: "Product Launch",
      attendees: 200,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "New luxury residential complex unveiling",
    },
    {
      id: 5,
      title: "Real Estate Investment Workshop",
      date: "2025-01-28",
      time: "1:00 PM - 5:00 PM",
      location: "Workshop Room 2",
      type: "Workshop",
      attendees: 80,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Hands-on investment strategies and tips",
    },
    // {
    //   id: 6,
    //   title: "Dubai Property Show Grand Finale",
    //   date: "2025-11-30",
    //   time: "9:00 AM - 8:00 PM",
    //   location: "Main Exhibition Hall",
    //   type: "Product Launch",
    //   attendees: 500,
    //   image:
    //     "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    //   description: "The grand finale event featuring exclusive property launches, VIP networking sessions, and special investment opportunities. Join us for a spectacular closing ceremony with live entertainment, gourmet dining, and exclusive developer presentations.",
    // },
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const getEventsForDate = (date) => {
    if (!date) return [];
    // Use local date components to avoid timezone issues
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dateString = `${year}-${month}-${day}`;
    return events.filter((event) => event.date === dateString);
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentMonth(newDate);
  };

  const getEventTypeColor = (type) => {
    const colors = {
      "Developer Showcase": "bg-[#073c75]",
      Educational: "bg-green-500",
      Tour: "bg-purple-500",
      "Product Launch": "bg-red-500",
      Workshop: "bg-yellow-500",
    };
    return colors[type] || "bg-gray-500";
  };

  const upcomingEvents = events
    .filter((event) => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-4 py-2">
            Events & Calendar
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Upcoming Events & <span className="text-gradient">Showcases</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join exclusive property showcases, expert seminars, and VIP tours.
            Stay updated with the latest events at Dubai Property Show.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            // className="lg:col-span-2"
          >
            <Card className="shadow-xl border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-[#073c75] to-[#51779e] text-white">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold">
                    {currentMonth.toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigateMonth(-1)}
                      className="text-white hover:bg-white/20"
                    >
                      <ChevronLeft size={20} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigateMonth(1)}
                      className="text-white hover:bg-white/20"
                    >
                      <ChevronRight size={20} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {/* Calendar Header */}
                <div className="grid grid-cols-7 bg-gray-100 border-b">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="p-4 text-center font-semibold text-gray-700 text-sm"
                      >
                        {day}
                      </div>
                    )
                  )}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7">
                  {getDaysInMonth(currentMonth).map((date, index) => {
                    const dayEvents = getEventsForDate(date);
                    const isSelected =
                      date &&
                      selectedDate &&
                      selectedDate.toDateString() === date.toDateString();
                    const today = new Date();
                    const isToday =
                      date &&
                      date.getDate() === today.getDate() &&
                      date.getMonth() === today.getMonth() &&
                      date.getFullYear() === today.getFullYear();

                    return (
                      <div
                        key={index}
                        className={`min-h-[66px] p-2 border-r border-b border-gray-200 cursor-pointer hover:bg-blue-50 transition-colors ${
                          isSelected ? "bg-blue-100 ring-2 ring-[#073c75]" : ""
                        } ${
                          isToday && !isSelected ? "ring-2 ring-[#073c75]" : ""
                        }`}
                        onClick={() => date && setSelectedDate(date)}
                      >
                        {date && (
                          <>
                            <div
                              className={`text-sm font-medium mb-1 ${
                                isSelected
                                  ? "text-blue-700"
                                  : isToday
                                  ? "text-[#073c75] font-bold"
                                  : "text-gray-700"
                              }`}
                            >
                              {date.getDate()}
                            </div>
                            {dayEvents.map((event) => (
                              <div
                                key={event.id}
                                className={`w-full h-1.5 rounded-full mb-1 ${getEventTypeColor(
                                  event.type
                                )}`}
                                title={event.title}
                              />
                            ))}
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Events */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="text-[#073c75]" size={20} />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-[#073c75] transition-colors">
                          {event.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                          <Calendar size={12} />
                          {new Date(event.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock size={12} />
                          {event.time.split(" - ")[0]}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                <Button className="w-full mt-4" variant="outline">
                  <Plus size={16} className="mr-2" />
                  Add to Calendar
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats 
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center border-0 shadow-lg bg-[#cdd8e3]">
                <CardContent className="p-4">
                  <Building2 className="w-8 h-8 text-[#073c75] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">
                    {events.length}
                  </div>
                  <div className="text-sm text-gray-600">Events This Month</div>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg bg-[#cdd8e3]">
                <CardContent className="p-4">
                  <Users className="w-8 h-8 text-[#073c75] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">1.2K+</div>
                  <div className="text-sm text-gray-600">
                    Expected Attendees
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            key={selectedDate ? selectedDate.toISOString() : "featured"}
          >
            {(() => {
              const selectedDateEvents = selectedDate
                ? getEventsForDate(selectedDate)
                : [];
              const hasEvents = selectedDateEvents.length > 0;
              const displayEvent = hasEvents ? selectedDateEvents[0] : null;

              // Show event details if a date with events is selected
              if (hasEvents && displayEvent) {
                return (
                  <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white h-full">
                    <div className="relative">
                      <img
                        src={displayEvent.image}
                        alt={displayEvent.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                    </div>
                    <div className="p-8 lg:p-12 relative">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedDate(null)}
                        className="absolute top-4 right-4 text-white hover:bg-white/20"
                      >
                        <X size={20} />
                      </Button>
                      <Badge
                        className={`mb-4 ${getEventTypeColor(
                          displayEvent.type
                        )} text-white border-0`}
                      >
                        {displayEvent.type}
                      </Badge>
                      <h3 className="text-3xl font-bold mb-4">
                        {displayEvent.title}
                      </h3>
                      <p className="text-white/90 mb-6 text-lg">
                        {displayEvent.description}
                      </p>
                      <div className="space-y-3 mb-8">
                        <div className="flex items-center gap-3">
                          <Calendar className="text-white/80" size={20} />
                          <span>
                            {(() => {
                              // Parse date string to avoid timezone issues
                              const [year, month, day] = displayEvent.date
                                .split("-")
                                .map(Number);
                              const eventDate = new Date(year, month - 1, day);
                              return eventDate.toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              });
                            })()}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="text-white/80" size={20} />
                          <span>{displayEvent.time}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="text-white/80" size={20} />
                          <span>{displayEvent.location}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="text-white/80" size={20} />
                          <span>
                            {displayEvent.attendees} Expected Attendees
                          </span>
                        </div>
                      </div>
                      {selectedDateEvents.length > 1 && (
                        <div className="mb-6 p-4 bg-white/10 rounded-lg">
                          <p className="text-sm text-white/80 mb-2">
                            {selectedDateEvents.length} events on this date
                          </p>
                          <div className="space-y-2">
                            {selectedDateEvents.slice(1).map((event) => (
                              <div
                                key={event.id}
                                className="text-sm text-white/70 flex items-center gap-2"
                              >
                                <div
                                  className={`w-2 h-2 rounded-full ${getEventTypeColor(
                                    event.type
                                  )}`}
                                ></div>
                                {event.title} - {event.time.split(" - ")[0]}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      <Button
                        className="bg-white text-[#073c75] hover:bg-gray-100 w-full"
                        size="lg"
                      >
                        Register for Event
                      </Button>
                    </div>
                  </Card>
                );
              }

              // Show featured event when no date is selected or no events on selected date
              return (
                <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white h-full">
                  <div className="p-8 lg:p-12">
                    <Badge className="mb-4 bg-white/20 text-white border-white/30">
                      Featured Event
                    </Badge>
                    <h3 className="text-3xl font-bold mb-4">
                      Dubai Real Estate Summit 2025
                    </h3>
                    <p className="text-white/90 mb-6 text-lg">
                      Join industry leaders, top developers, and investment
                      experts for the most comprehensive real estate event of
                      the year.
                    </p>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <Calendar className="text-white/80" size={20} />
                        <span>March 15-17, 2025</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="text-white/80" size={20} />
                        <span>DPS Exhibition Center, Dubai</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="text-white/80" size={20} />
                        <span>2000+ Expected Attendees</span>
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button
                        className="bg-white text-[#073c75] hover:bg-gray-100 w-full"
                        size="lg"
                      >
                        Register Now
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })()}
          </motion.div>
        </div>

        {/* Featured Event */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <Badge className="mb-4 bg-white/20 text-white border-white/30">
                  Featured Event
                </Badge>
                <h3 className="text-3xl font-bold mb-4">
                  Dubai Real Estate Summit 2025
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                  Join industry leaders, top developers, and investment experts
                  for the most comprehensive real estate event of the year.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-white/80" size={20} />
                    <span>March 15-17, 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-white/80" size={20} />
                    <span>DPS Exhibition Center, Dubai</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-white/80" size={20} />
                    <span>2000+ Expected Attendees</span>
                  </div>
                </div>
                <Button
                  className="bg-white text-[#073c75] hover:bg-gray-100"
                  size="lg"
                >
                  Register Now
                </Button>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Summit Event"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </Card>
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 mt-12"
        >
          {/* <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="text-[#073c75]" size={20} />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-[#073c75] transition-colors">
                        {event.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                        <Calendar size={12} />
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock size={12} />
                        {event.time.split(" - ")[0]}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <Button className="w-full mt-4" variant="outline">
                <Plus size={16} className="mr-2" />
                Add to Calendar
              </Button>
            </CardContent>
          </Card> */}

          {/* Quick Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="text-[#073c75]" size={20} />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => {
                      const eventDate = new Date(event.date);
                      setSelectedDate(eventDate);
                      setCurrentMonth(eventDate);
                    }}
                  >
                    <div className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-[#073c75] transition-colors">
                          {event.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                          <Calendar size={12} />
                          {(() => {
                            // Parse date string to avoid timezone issues
                            const [year, month, day] = event.date
                              .split("-")
                              .map(Number);
                            const eventDate = new Date(year, month - 1, day);
                            return eventDate.toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            });
                          })()}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock size={12} />
                          {event.time.split(" - ")[0]}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
            <Card className="text-center shadow-xl border-0 flex flex-col items-center justify-center">
              <CardContent className="p-4">
                <Building2 className="w-8 h-8 text-[#073c75] mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">
                  {events.length}
                </div>
                <div className="text-sm text-gray-600">Events This Month</div>
              </CardContent>
            </Card>

            <Card className="text-center shadow-xl border-0 flex flex-col items-center justify-center">
              <CardContent className="p-4">
                <Users className="w-8 h-8 text-[#073c75] mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">1.2K+</div>
                <div className="text-sm text-gray-600">Expected Attendees</div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventCalendar;
