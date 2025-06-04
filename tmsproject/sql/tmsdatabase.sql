create database tms;
use tms;
create table train_info(
      train_id int primary key,
      train_no int unique not null,
      train_name varchar(100) unique not null,
      starting_station varchar(100) not null,
      starting_time time not null,
      destination_station varchar(100) not null,
      arrival_time time  not null,
      travel_duration varchar(20) not null,
      no_of_stations int not null,
      stn_btn_src_des json not null,
      couch_composition json not null,
      running_frequency varchar(100) not null
  );
 select * from train_info;
 ALTER TABLE train_info MODIFY train_id INT AUTO_INCREMENT PRIMARY KEY;

 
 INSERT INTO train_info (
    train_id, train_no, train_name, starting_station, starting_time,
    destination_station, arrival_time, travel_duration, no_of_stations,
    stn_btn_src_des, couch_composition, running_frequency
) VALUES
(1, 12723, 'Andhra Pradesh Express', 'Hyderabad Decan', '06:00:00', 'New Delhi', '05:30:00', '23h 30m', 25,
 '{"stations": ["Hyderabad Decan", "Kazipet", "Nagpur", "Bhopal", "Jhansi", "Agra", "New Delhi"]}',
 '{"AC": 2, "Sleeper": 8}', 
 'Daily'),

(2, 15909, 'Abadh Assam Express', 'New Tinsukia Junction', '07:10:00', 'Darbhanga Junction', '08:30:00', '25h 20m', 28,
 '{"stations": ["New Tinsukia Junction", "Dibrugarh", "Guwahati", "Katihar", "Samastipur", "Darbhanga Junction"]}',
 '{"AC": 2, "Sleeper": 10}', 
 'Monday, Wednesday, Saturday'),

(3, 18242, 'Abkp Durg Passenger E', 'Ambikapur', '04:00:00', 'Durg', '14:15:00', '10h 15m', 15,
 '{"stations": ["Ambikapur", "Kusmi", "Anuppur", "Bilaspur", "Durg"]}',
 '{"GS": 10}', 
 'Daily'),

(4, 11266, 'Abkp Jbp Express', 'Ambikapur', '22:00:00', 'Jabalpur', '06:00:00', '8h 00m', 12,
 '{"stations": ["Ambikapur", "Surajpur", "Shahdol", "Katni", "Jabalpur"]}',
 '{"AC": 1, "Sleeper": 6}', 
 'Daily'),

(5, 58702, 'Abkp Sdl Passenger', 'Ambikapur', '05:30:00', 'Shahdol', '09:00:00', '3h 30m', 10,
 '{"stations": ["Ambikapur", "Bishrampur", "Kotma", "Anuppur", "Shahdol"]}',
 '{"GS": 8}', 
 'Daily'),

(6, 54703, 'Abs Ju Passengr', 'Abohar', '03:45:00', 'Jodhpur Junction', '19:30:00', '15h 45m', 35,
 '{"stations": ["Abohar", "Sri Ganganagar", "Bikaner", "Nagaur", "Jodhpur Junction"]}',
 '{"GS": 12}', 
 'Daily'),

(7, 7509, 'Adb Qln Special', 'Adilabad', '16:00:00', 'Kollam Junction', '20:00:00', '28h 00m', 32,
 '{"stations": ["Adilabad", "Nizamabad", "Secunderabad", "Ernakulam", "Kollam Junction"]}',
 '{"AC": 3, "Sleeper": 10}', 
 'Monday'),

(8, 9416, 'Adi Madgaon Special', 'Ahmedabad Junction', '18:00:00', 'Madgaon', '16:00:00', '22h 00m', 18,
 '{"stations": ["Ahmedabad Junction", "Surat", "Vasai Road", "Ratnagiri", "Madgaon"]}',
 '{"AC": 2, "Sleeper": 8}', 
 'Tuesday, Friday'),

(9, 19417, 'Adi Ald Express', 'Ahmedabad Junction', '23:00:00', 'Allahabad Junction', '20:00:00', '21h 00m', 20,
 '{"stations": ["Ahmedabad Junction", "Ratlam", "Kota", "Kanpur", "Allahabad Junction"]}',
 '{"AC": 2, "Sleeper": 9}', 
 'Daily'),

(10, 9427, 'Adi Ald Special', 'Ahmedabad Junction', '20:30:00', 'Allahabad Junction', '17:00:00', '20h 30m', 20,
 '{"stations": ["Ahmedabad Junction", "Ratlam", "Bina", "Satna", "Allahabad Junction"]}',
 '{"AC": 2, "Sleeper": 10}', 
 'Sunday'),

(11, 17225, 'Amaravathi Express', 'Vijayawada Junction', '18:45:00', 'Hubli Junction', '09:10:00', '14h 25m', 18,
 '{"stations": ["Vijayawada Junction", "Guntur", "Gadag", "Dharwad", "Hubli Junction"]}',
 '{"AC": 2, "Sleeper": 9}', 
 'Daily');
 select * from train_info;




