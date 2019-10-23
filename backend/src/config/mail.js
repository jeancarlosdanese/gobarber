export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe GoBarber <noreplay@gobarber.com.br>',
  },
};

/**
 * Amazon SES
 * Mailgun
 * Sparkpost
 */

/**
 * Somente para ambiente de desenvolvimento
 * Mailtrap (DEV)
 *
 * https://mailtrap.io/
 */
