-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Inang: localhost
-- Waktu pembuatan: 02 Mei 2014 pada 12.05
-- Versi Server: 5.5.34
-- Versi PHP: 5.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `repairjs`
--

-- --------------------------------------------------------

--
-- Stable structure `customer`
--

CREATE TABLE IF NOT EXISTS `customer_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `address` text NOT NULL,
  `phone` varchar(20) NOT NULL,
  `date` DATE,
  `problem` varchar(800) NOT NULL,
  `complaint_resolution` varchar(800) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table`customer_table`
--

INSERT INTO `customer_table` (`id`, `name`, `address`, `phone`,`date`,`problem`,`complaint_resolution`) VALUES
(1, 'Nadya Eka', 'Jl. Ciwidey no 20', '086454743743','2017-9-19','vedio not matching audio','Go to audio settings of your TV and adust the audio delay '),
(2, 'Amali', 'Jl. kemandoran no 10 Jakarta',  '03937263623','2018-11-13','hearing an echo','Turn the volume all the way down for your TV speakers and only use your external sound system.'),
(3, 'Angel ', 'Jl. Ciledug no 45A. tanggerang',  '082271626121','2019-4-16','picture is pixelating or breaking up','this is all because of experiencing a weak signal.ensure that all connections should be tight'),
(4, 'Ujang', 'Jl. ribut no 90 A', '07846352532','2020-6-10','LED or QLED has lines or craked','replace pannel'),
(5, 'Memet', 'Blok cepu no 14. Bandung', '038372636232','2020-12-24','Tv turn on But No picture','change the input by pushing a button on your tv'),
(6, 'Agung', 'Jl st Petersburg no 34. Russia', '038373273262','2021-1-21','pannel issue','replace pannel'),
(7, 'Jhon Taylor', 'St paris A . Block 43. paris',  '039223232323','2021-2-1','ic issue','replace ic');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


CREATE TABLE IF NOT EXISTS `contactus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(200) NOT NULL,
  `password` text NOT NULL,
  PRIMARY KEY (`id`))

 


INSERT INTO `contact` (`id`, `username`, `password`,`mobile`,) VALUES
(1, 'root', 'root',`9876543210`),
(2, 'emma', 'emmawatson',`9087654321`),
(3, 'pooja', 'supersecretpassword',`9807654321`)