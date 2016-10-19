<?

class migxCommentsNotifier { 
	protected $modx;
	public function __construct(&$modx){
		$this->modx = $modx;
	}
	
	public function notifyAdmin($subject, $message){
		$adminEmail = $this->modx->getOption('manager_email');
		$this->sendEmail($adminEmail, $subject, $message);
	}
	
	public function sendEmail($to, $subject, $message){
		$mailTo = explode(',', $to);
		$mailFrom = $this->modx->getOption('emailsender');
		$mailFromName = $this->modx->getOption('site_name');
		$mailSender = $this->modx->getOption('site_name');
		
		$this->modx->getService('mail', 'mail.modPHPMailer');
		$this->modx->mail->set(modMail::MAIL_BODY,$message);
		$this->modx->mail->set(modMail::MAIL_FROM, $mailFrom);
		$this->modx->mail->set(modMail::MAIL_FROM_NAME, $fromName);
		$this->modx->mail->set(modMail::MAIL_SUBJECT, $subject);
		foreach($mailTo as $mto){
			$this->modx->mail->address('to',$mto);
		}
		
		$this->modx->mail->setHTML(true);
		if (!$this->modx->mail->send()) {
			$this->modx->log(modX::LOG_LEVEL_ERROR,'An error occurred while trying to send the email: '.$this->modx->mail->mailer->ErrorInfo);
		}
		$this->modx->mail->reset();
	}
}
