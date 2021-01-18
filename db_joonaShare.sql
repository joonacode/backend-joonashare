-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 18 Jan 2021 pada 06.48
-- Versi server: 10.4.17-MariaDB
-- Versi PHP: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_joonaShare`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `posts`
--

CREATE TABLE `posts` (
  `id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `total_likes` int(11) NOT NULL,
  `total_comments` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `description`, `image`, `total_likes`, `total_comments`, `created_at`, `updated_at`) VALUES
('03ec4bad-a5d1-4478-aa8b-1f425c0e88dd', 'fe03e788-b0bc-48ad-914a-4e5a4ad411ed', 'Halo aku juned', 'http://localhost:4000/uploads/m1al5g5qp4g.png', 2, 4, '2021-01-17 13:05:01', NULL),
('2866b5fd-0482-491b-903f-f1bdc662c2c2', '4643f268-66fc-4fc1-9642-098b3301103e', 'Aku batman hahahaha', 'http://localhost:4000/uploads/g7ov9irtck.png', 2, 4, '2021-01-18 05:29:14', '2021-01-18 05:29:35'),
('2db90b6b-32a0-4219-93dd-80167193b130', '16922f69-ad96-41ab-afd4-206ecb5d80be', 'Hi saya jack', 'http://localhost:4000/uploads/k7o0pqvdi.png', 4, 4, '2021-01-18 04:59:23', NULL),
('2f5e32bf-048b-4c7c-9b07-67582dd4a007', 'dc13c287-ad4e-4f95-a993-a301168934f4', 'Saya james saja', 'http://localhost:4000/uploads/arai4l7ijo.png', 2, 4, '2021-01-18 05:42:08', '2021-01-18 05:42:29'),
('d3f4d530-7a65-406a-b58e-033084a82026', 'a95db5c4-7401-4a68-8250-bee44adacf08', 'Update berhasil', 'http://localhost:4000/uploads/pcs1vjmpd38.png', 3, 4, '2021-01-16 11:17:23', '2021-01-18 05:01:46');

-- --------------------------------------------------------

--
-- Struktur dari tabel `post_comments`
--

CREATE TABLE `post_comments` (
  `id` int(11) NOT NULL,
  `post_id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `post_comments`
--

INSERT INTO `post_comments` (`id`, `post_id`, `user_id`, `comment`, `created_at`) VALUES
(9, '03ec4bad-a5d1-4478-aa8b-1f425c0e88dd', 'a95db5c4-7401-4a68-8250-bee44adacf08', 'anjasss', '2021-01-17 18:33:10'),
(11, 'd3f4d530-7a65-406a-b58e-033084a82026', 'a95db5c4-7401-4a68-8250-bee44adacf08', 'wadidaw', '2021-01-17 18:59:15'),
(15, 'd3f4d530-7a65-406a-b58e-033084a82026', 'fe03e788-b0bc-48ad-914a-4e5a4ad411ed', 'woi berisik', '2021-01-17 18:59:43'),
(16, 'd3f4d530-7a65-406a-b58e-033084a82026', 'fe03e788-b0bc-48ad-914a-4e5a4ad411ed', 'awikwok', '2021-01-17 18:59:44'),
(17, 'd3f4d530-7a65-406a-b58e-033084a82026', 'fe03e788-b0bc-48ad-914a-4e5a4ad411ed', 'jajaja', '2021-01-17 18:59:45'),
(21, '03ec4bad-a5d1-4478-aa8b-1f425c0e88dd', 'fe03e788-b0bc-48ad-914a-4e5a4ad411ed', 'llllala', '2021-01-17 18:59:59'),
(22, '03ec4bad-a5d1-4478-aa8b-1f425c0e88dd', 'fe03e788-b0bc-48ad-914a-4e5a4ad411ed', 'asdkasdasd', '2021-01-17 19:00:01'),
(25, '2db90b6b-32a0-4219-93dd-80167193b130', '16922f69-ad96-41ab-afd4-206ecb5d80be', 'Waw jack', '2021-01-18 04:59:36'),
(30, '2db90b6b-32a0-4219-93dd-80167193b130', 'e49cd0fc-138d-42fb-9af7-1daf2ad6b34c', 'Tes komentar 2', '2021-01-18 05:14:37'),
(32, '03ec4bad-a5d1-4478-aa8b-1f425c0e88dd', 'a95db5c4-7401-4a68-8250-bee44adacf08', 'haloo', '2021-01-18 05:16:31'),
(36, '2db90b6b-32a0-4219-93dd-80167193b130', '4643f268-66fc-4fc1-9642-098b3301103e', 'Wow jack', '2021-01-18 05:28:47'),
(38, '2866b5fd-0482-491b-903f-f1bdc662c2c2', '4643f268-66fc-4fc1-9642-098b3301103e', 'wowow', '2021-01-18 05:29:44'),
(39, '2866b5fd-0482-491b-903f-f1bdc662c2c2', 'a95db5c4-7401-4a68-8250-bee44adacf08', 'wow batman', '2021-01-18 05:30:16'),
(40, '2866b5fd-0482-491b-903f-f1bdc662c2c2', 'a95db5c4-7401-4a68-8250-bee44adacf08', 'wwowowo', '2021-01-18 05:30:19'),
(42, '2866b5fd-0482-491b-903f-f1bdc662c2c2', 'dc13c287-ad4e-4f95-a993-a301168934f4', 'Halo bro', '2021-01-18 05:41:33'),
(45, '2db90b6b-32a0-4219-93dd-80167193b130', 'dc13c287-ad4e-4f95-a993-a301168934f4', 'asdasd', '2021-01-18 05:41:51'),
(46, '2f5e32bf-048b-4c7c-9b07-67582dd4a007', 'dc13c287-ad4e-4f95-a993-a301168934f4', 'jaaaaa', '2021-01-18 05:42:39'),
(47, '2f5e32bf-048b-4c7c-9b07-67582dd4a007', 'dc13c287-ad4e-4f95-a993-a301168934f4', 'asdasa', '2021-01-18 05:42:40'),
(48, '2f5e32bf-048b-4c7c-9b07-67582dd4a007', 'dc13c287-ad4e-4f95-a993-a301168934f4', 'aaaa', '2021-01-18 05:42:40'),
(50, '2f5e32bf-048b-4c7c-9b07-67582dd4a007', 'a95db5c4-7401-4a68-8250-bee44adacf08', 'laaaa', '2021-01-18 05:43:13');

-- --------------------------------------------------------

--
-- Struktur dari tabel `post_likes`
--

CREATE TABLE `post_likes` (
  `id` int(11) NOT NULL,
  `post_id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `post_likes`
--

INSERT INTO `post_likes` (`id`, `post_id`, `user_id`) VALUES
(5, 'd3f4d530-7a65-406a-b58e-033084a82026', '62705ee6-e414-407e-b80d-92a93ce6a350'),
(23, 'd3f4d530-7a65-406a-b58e-033084a82026', '16922f69-ad96-41ab-afd4-206ecb5d80be'),
(24, '2db90b6b-32a0-4219-93dd-80167193b130', '16922f69-ad96-41ab-afd4-206ecb5d80be'),
(25, '2db90b6b-32a0-4219-93dd-80167193b130', 'a95db5c4-7401-4a68-8250-bee44adacf08'),
(26, '2db90b6b-32a0-4219-93dd-80167193b130', 'e49cd0fc-138d-42fb-9af7-1daf2ad6b34c'),
(30, 'd3f4d530-7a65-406a-b58e-033084a82026', '4643f268-66fc-4fc1-9642-098b3301103e'),
(31, '03ec4bad-a5d1-4478-aa8b-1f425c0e88dd', '4643f268-66fc-4fc1-9642-098b3301103e'),
(33, '2866b5fd-0482-491b-903f-f1bdc662c2c2', '4643f268-66fc-4fc1-9642-098b3301103e'),
(37, '2db90b6b-32a0-4219-93dd-80167193b130', 'dc13c287-ad4e-4f95-a993-a301168934f4'),
(38, '2866b5fd-0482-491b-903f-f1bdc662c2c2', 'dc13c287-ad4e-4f95-a993-a301168934f4'),
(39, '2f5e32bf-048b-4c7c-9b07-67582dd4a007', 'dc13c287-ad4e-4f95-a993-a301168934f4'),
(41, '2f5e32bf-048b-4c7c-9b07-67582dd4a007', 'a95db5c4-7401-4a68-8250-bee44adacf08'),
(42, '03ec4bad-a5d1-4478-aa8b-1f425c0e88dd', 'a95db5c4-7401-4a68-8250-bee44adacf08');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `name` varchar(128) NOT NULL,
  `username` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `foto_profile` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `bio`, `foto_profile`, `created_at`, `updated_at`) VALUES
('16922f69-ad96-41ab-afd4-206ecb5d80be', 'Jack', 'jack', 'jack@gmail.com', '$2b$12$Dc580yeOSEslldyLmyErlOQHc84rGoQDlkr5SbCxCrixAcYTsof/C', NULL, NULL, '2021-01-18 04:49:06', '2021-01-18 04:49:06'),
('4643f268-66fc-4fc1-9642-098b3301103e', 'Batman', 'batman', 'batman@gmail.com', '$2b$12$Q8k70StYDON3kHQdnMg8QebH1QCvD1buPpKctMDokUuBo/ajIaB4S', NULL, NULL, '2021-01-18 05:27:51', '2021-01-18 05:27:51'),
('62705ee6-e414-407e-b80d-92a93ce6a350', 'Junedx', 'junedx', 'junedx@gmail.com', '$2b$12$pk5xOKG6DAwky1EjFPkTvurnMcFXAhtm/LVD/TFxIpVrnzqS3swRu', '', NULL, '2021-01-16 08:04:30', '2021-01-16 08:04:30'),
('6470e1c8-7ce6-48ca-b22a-1becf182a7e2', 'Joona Code', 'joonacode', 'joonacode@gmail.com', '$2b$12$2e2YS0exSLDagnHh3rzkjuzRx3LG639RLldRSOqprfNOXXZjlzsv6', NULL, NULL, '2021-01-16 16:15:57', '2021-01-16 16:15:57'),
('653e9aad-630c-4330-a751-1358370cf0d2', 'Junedxxc', 'junedxxc', 'junedxcc@gmail.com', '$2b$12$KfP6ocBdmxvWtCm9vM2nvenkBGnegBAwOS0aRp7eFa6RQnA4enNdi', '', NULL, '2021-01-16 08:05:28', '2021-01-16 08:05:28'),
('81dc2a8f-b57e-4e6d-bc25-b04c6e5a283b', 'Junedxxca', 'junedxxca', 'junedxcac@gmail.com', '$2b$12$.sZ7EdKuerS5BttPK5ZmDODdUyfoa17/4jaml9Zr/yc0/dx1irKqq', '', NULL, '2021-01-16 08:06:12', '2021-01-16 08:06:12'),
('9f666ee6-6783-47cb-b466-fde347c18b00', 'Junedxx', 'junedxx', 'junedxc@gmail.com', '$2b$12$3Jxqa7ITXUrGVd5QSpt2x.7QWAIhHOCtp7zLIyN3eEaYxSrPQqsZ2', '', NULL, '2021-01-16 08:04:51', '2021-01-16 08:04:51'),
('a95db5c4-7401-4a68-8250-bee44adacf08', 'Cep Guna Widodo', 'cepguna20', 'cepgunawidodo@gmail.com', '$2b$12$tXebLsQrpjrKuZJ0S3Otuek5Ad45WbiC5bRAu89EPrcn8mHH9PLHK', '.', 'http://localhost:4000/uploads/ojni2vdu7co.png', '2021-01-16 07:46:52', '2021-01-16 07:46:52'),
('c50d0b70-a8af-4666-a8af-2e4b1a5d73aa', 'Junedxxcaa', 'junedxxcaa', 'junedxcaca@gmail.com', '$2b$12$JLCweKk9cG9jORzk2QnJz.0Gp3SrMjyZmwAAzh/lyOBGvEVG1PLcu', '', NULL, '2021-01-16 08:06:35', '2021-01-16 08:06:35'),
('d53d003f-67e9-4e58-aeea-330b59525c5a', 'awikwok', 'awikwok', 'awikwok@gmail.com', '$2b$12$yfbf/HInuMzpw9ySsXFjjOmVs.S/hmey73.5KN3hvkbDu9FVv.6o2', NULL, NULL, '2021-01-16 16:19:01', '2021-01-16 16:19:01'),
('dc13c287-ad4e-4f95-a993-a301168934f4', 'James', 'james', 'james@gmail.com', '$2b$12$qak9pRzfdk9GCrTE1Zf4hud0lYKCj9xiOottvszuSwMYlwvStDD2C', NULL, NULL, '2021-01-18 05:40:50', '2021-01-18 05:40:50'),
('e49cd0fc-138d-42fb-9af7-1daf2ad6b34c', 'UserKu', 'userku', 'userku@gmail.com', '$2b$12$mly6guS6ERBohYg6AzNJyeIrQ5dR.LRzrTse5vecdzOR/sFBhy1zO', NULL, NULL, '2021-01-18 05:13:50', '2021-01-18 05:13:50'),
('fe03e788-b0bc-48ad-914a-4e5a4ad411ed', 'Juned', 'juned', 'juned@gmail.com', '$2b$12$tXebLsQrpjrKuZJ0S3Otuek5Ad45WbiC5bRAu89EPrcn8mHH9PLHK', '', NULL, '2021-01-16 07:53:06', '2021-01-16 07:53:06');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `post_comments`
--
ALTER TABLE `post_comments`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `post_likes`
--
ALTER TABLE `post_likes`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `post_comments`
--
ALTER TABLE `post_comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT untuk tabel `post_likes`
--
ALTER TABLE `post_likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
