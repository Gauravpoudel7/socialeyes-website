import { motion, AnimatePresence } from 'framer-motion';

const CLOSE_S = 0.9;
const OPEN_S = 1.1;
const EASE = [0.45, 0.05, 0.25, 1];

export default function Shutter({ open, theme }) {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const duration = reduce ? 0 : open ? OPEN_S : CLOSE_S;
  const ease = EASE;

  return (
    <div
      className={'shutter' + (open ? ' is-open' : '')}
      data-theme={theme}
      aria-hidden="true"
    >
      <motion.div
        className="shutter-lid shutter-lid--top"
        initial={{ y: '0%' }}
        animate={{ y: open ? '-100%' : '0%' }}
        transition={{ duration, ease }}
      />
      <motion.div
        className="shutter-lid shutter-lid--bottom"
        initial={{ y: '0%' }}
        animate={{ y: open ? '100%' : '0%' }}
        transition={{ duration, ease }}
      />
      <AnimatePresence>
        {!open && (
          <motion.p
            className="shutter-mark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : 0.2 }}
          >
            SOCIALEYES<span className="dot">&#9679;</span>
            <span className="ai">AI</span>
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
