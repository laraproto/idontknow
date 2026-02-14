import Email from '@idontknow/transactional/emails/email';
import { render } from '@react-email/render';

export const makeEmail = async () => {
	return await render(<Email />);
};
