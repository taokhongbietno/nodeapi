-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 19, 2020 at 04:15 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `belearn`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblclass`
--

CREATE TABLE `tblclass` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tblclass`
--

INSERT INTO `tblclass` (`id`, `name`) VALUES
(0, ''),
(1, 'da01'),
(2, 'da02'),
(3, 'da03');

-- --------------------------------------------------------

--
-- Table structure for table `tblhanghoa`
--

CREATE TABLE `tblhanghoa` (
  `id` int(11) NOT NULL,
  `maHangHoa` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tenHangHoa` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nhaCungCap` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `soLuong` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tblhanghoa`
--

INSERT INTO `tblhanghoa` (`id`, `maHangHoa`, `tenHangHoa`, `nhaCungCap`, `soLuong`) VALUES
(1, 'tl0001', 'Bánh mì Kinh Đô', 'Birica', 200),
(2, 'tl0002', 'Mì gà', 'kokomi', 200),
(3, 'tl0003', 'Giăm bông', 'a đai', 300.5),
(4, 'tl0008', 'Bánh mì Kinlllh Đô', 'Birfgfgica', 6665);

-- --------------------------------------------------------

--
-- Table structure for table `tbluser`
--

CREATE TABLE `tbluser` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(11) NOT NULL,
  `sex` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `adresss` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `dob` datetime NOT NULL,
  `idClass` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbluser`
--

INSERT INTO `tbluser` (`id`, `name`, `password`, `username`, `age`, `sex`, `adresss`, `dob`, `idClass`) VALUES
(1, 'trung', 'e10adc3949ba59abbe56e057f20f883e', 'trung', 22, 'male', 'tra vinh', '2020-06-01 14:38:27', 1),
(2, 'nam', 'e10adc3949ba59abbe56e057f20f883e', 'nam', 23, 'be de', 'cau ngang', '2020-06-18 14:40:09', 1),
(3, 'khanh', 'e10adc3949ba59abbe56e057f20f883e', 'quan', 22, 'male', 'vinh', '2020-06-25 14:40:40', 3),
(4, 'tam', 'e10adc3949ba59abbe56e057f20f883e', 'tam', 25, 'female', 'vinh', '2020-06-24 15:21:06', 2),
(5, 'an', 'e10adc3949ba59abbe56e057f20f883e', 'an', 22, 'female', 'cam', '2020-06-24 15:21:44', 3),
(6, 'khanh', 'e10adc3949ba59abbe56e057f20f883e', 'khanh', 22, 'male', 'vinh', '2020-06-25 07:40:40', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblclass`
--
ALTER TABLE `tblclass`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblhanghoa`
--
ALTER TABLE `tblhanghoa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbluser`
--
ALTER TABLE `tbluser`
  ADD PRIMARY KEY (`id`),
  ADD KEY `forClass` (`idClass`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblclass`
--
ALTER TABLE `tblclass`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tblhanghoa`
--
ALTER TABLE `tblhanghoa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbluser`
--
ALTER TABLE `tbluser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
