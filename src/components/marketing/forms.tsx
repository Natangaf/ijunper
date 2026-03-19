type FormProps = {
  title: string;
  description: string;
  buttonLabel: string;
};

const fieldClassName =
  "h-12 rounded-2xl border border-white/12 bg-white/6 px-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-accent/60 focus:bg-white/8";

export function LeadForm({ title, description, buttonLabel }: FormProps) {
  return (
    <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
      <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
      <p className="mt-3 max-w-lg text-sm leading-7 text-muted">{description}</p>
      <form className="mt-8 grid gap-4">
        <input className={fieldClassName} type="text" placeholder="Nome" name="name" />
        <input className={fieldClassName} type="email" placeholder="Email" name="email" />
        <input
          className={fieldClassName}
          type="tel"
          placeholder="WhatsApp"
          name="phone"
        />
        <button
          type="submit"
          className="mt-2 inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-6 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(108,59,255,0.35)] hover:-translate-y-0.5 hover:bg-[#7a50ff]"
        >
          {buttonLabel}
        </button>
      </form>
    </div>
  );
}

export function ContactForm() {
  return (
    <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
      <h3 className="font-display text-2xl font-bold text-white">Envie sua mensagem</h3>
      <p className="mt-3 max-w-lg text-sm leading-7 text-muted">
        Fale com a I Jumper e comece a crescer com estratégia, posicionamento e execução.
      </p>
      <form className="mt-8 grid gap-4">
        <input className={fieldClassName} type="text" placeholder="Nome" name="name" />
        <input className={fieldClassName} type="email" placeholder="Email" name="email" />
        <input
          className={fieldClassName}
          type="tel"
          placeholder="WhatsApp"
          name="phone"
        />
        <textarea
          className="min-h-36 rounded-2xl border border-white/12 bg-white/6 px-4 py-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-accent/60 focus:bg-white/8"
          placeholder="Conte um pouco sobre o seu desafio"
          name="message"
        />
        <button
          type="submit"
          className="mt-2 inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-6 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(108,59,255,0.35)] hover:-translate-y-0.5 hover:bg-[#7a50ff]"
        >
          Falar com a I Jumper
        </button>
      </form>
    </div>
  );
}
