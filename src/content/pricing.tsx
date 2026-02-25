export const PRICING_CONTENT = {
  ticket: "Pricing Plan",
  title: "سعر واحد، فرص بلا حدود",
  subtitle:
    "سجّل اليوم وضمّن أفضل خارطة طريق للفريلانس مدى الحياة. و هذا الكل بجزء صغير من قيمتها الحقيقية",
  main: {
    title: "شنوة باش تاخو",
    from: (
      <>
        من <span className="font-sora">1037</span> د.ت
      </>
    ),
    to: (
      <>
        <span className="font-sora">297</span> د.ت
      </>
    ),
    items: [
      {
        content: (
          <>
            <b>6 دورات معمّقة:</b> باش تولّي محترف في الفريلانس من الصفر حتى
            المستوى المتقدّم.{" "}
            <span>
              (القيمة: <span className="font-sora">1,250</span>DT)
            </span>
          </>
        ),
      },
      {
        content: (
          <>
            <b>دعم واتساب 24/7 من الخبراء:</b>مساعدة حقيقية في أي وقت.
            <span>
              (القيمة: <span className="font-sora">750</span>DT/السنة)
            </span>
          </>
        ),
      },
      {
        content: (
          <>
            <b>جلسات شهرية مع الخبراء:</b> تعلّم مستمر و تطوير دائم.
            <span>
              (القيمة: <span className="font-sora">1,000</span>DT/السنة)
            </span>
          </>
        ),
      },
      {
        content: (
          <>
            <b>نفاذ لكل المحتوى المستقبلي:</b>باش تبقى ديما مواكب للجديد.
            <span>
              {" "}
              (القيمة: <span className="font-sora">مستمرة</span>)
            </span>
          </>
        ),
      },
    ],
  },
  form: {
    title: "فاش تستنا؟",
    subtitle: "سجل تو بش تحصل على تخفيض قيمتو 740 د.ت ",
    items: [
      {
        label: "اسمك الكامل",
        value: "fullname",
        type: "text",
      },
      {
        label: "بريدك الالكتروني",
        value: "email",
        type: "email",
      },
      {
        label: "رقم هاتفك",
        value: "phone",
        type: "string",
      },
    ],
  },
  video: {
    title: "عندك أسئلة؟ خلينا نحكيو.",
    sub: "فريق الدعم متاعنا موجود في أي وقت.",
    items: [
      {
        content: "تاخو Accès لكل شي مدى الحياة",
      },
      {
        content: "محتوى مسجل على ذمتك في كل وقت",
      },
      {
        content: "تحصل على التوجيه في كل خطوة من رحلتك",
      },
    ],
  },
};
