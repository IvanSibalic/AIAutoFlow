/*
  # Create contacts table for portfolio website

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact's full name
      - `email` (text) - Contact's email address
      - `company` (text) - Contact's company name
      - `message` (text) - Contact's message
      - `created_at` (timestamptz) - Timestamp of submission
  
  2. Security
    - Enable RLS on `contacts` table
    - Add policy for anonymous users to insert contact submissions
    - Add policy for authenticated users to view all contacts (for admin access)

  3. Notes
    - Contact form submissions are publicly insertable (anyone can submit)
    - Only authenticated users can view submissions (business owner/admin)
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);