import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Qual é o endereço da nossa barbearia na quebrada?",
    answer:
      "Estamos localizados na Residencial Taipas, na Rua das Oliveiras, número 18. Venha nos visitar e sinta a essência da nossa comunidade.",
  },
  {
    question: "Como posso agendar um horário na barbearia?",
    answer:
      "Agendar é simples! Utilize o Whatsapp para marcar o seu horário. Estamos aqui para tornar o processo conveniente para você.",
  },
  {
    question: "Quais são os horários de atendimento da barbearia?",
    answer:
      "Durante a semana, atendemos a partir das 18h30, exclusivamente com agendamento. Aos finais de semana, estamos disponíveis das 09h às 21h, com horários marcados e também por ordem de chegada, para atender a todos os estilos de agenda.",
  },
];

export default function Faq() {
  return (
    <div id="faq" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl text-center font-bold leading-10 tracking-tight text-gray-900">
            Perguntas Frequentes - Mz Ducortt
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
