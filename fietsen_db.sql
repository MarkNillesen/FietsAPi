-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Gegenereerd op: 30 sep 2024 om 08:24
-- Serverversie: 8.2.0
-- PHP-versie: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fietsen_db`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `fietsen`
--

DROP TABLE IF EXISTS `fietsen`;
CREATE TABLE IF NOT EXISTS `fietsen` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `merk` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kleur_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fietsen_kleur_id_foreign` (`kleur_id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `fietsen`
--

INSERT INTO `fietsen` (`id`, `merk`, `kleur_id`, `created_at`, `updated_at`) VALUES
(1, 'test', 1, NULL, NULL),
(2, 'test', 2, '2024-09-18 07:49:10', '2024-09-18 07:49:10'),
(3, 'anil', 2, '2024-09-18 07:49:16', '2024-09-18 07:49:16'),
(4, 'd', 1, '2024-09-18 07:57:25', '2024-09-18 07:57:25'),
(5, 'r', 2, '2024-09-18 09:56:29', '2024-09-18 09:56:29'),
(6, 't', 2, '2024-09-18 09:56:52', '2024-09-18 09:56:52'),
(7, 'Mark', 5, '2024-09-30 05:50:08', '2024-09-30 05:50:08');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `kleuren`
--

DROP TABLE IF EXISTS `kleuren`;
CREATE TABLE IF NOT EXISTS `kleuren` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `naam` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `kleuren`
--

INSERT INTO `kleuren` (`id`, `naam`, `created_at`, `updated_at`) VALUES
(1, 'Rood', '2024-09-17 08:47:21', '2024-09-17 08:47:21'),
(2, 'Blauw', '2024-09-17 08:47:21', '2024-09-17 08:47:21'),
(3, 'Groen', '2024-09-17 08:47:21', '2024-09-17 08:47:21'),
(4, 'test', '2024-09-17 10:08:59', '2024-09-17 10:08:59'),
(5, 'test2', '2024-09-30 05:49:58', '2024-09-30 05:49:58');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(5, '2024_09_17_103114_create_kleuren_table', 1),
(6, '2024_09_17_103214_create_fietsen_table', 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
