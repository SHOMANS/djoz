import * as S from "./style";

export default function Map() {
  return (
    <S.Wrapper class="map">
      <div class="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6803.537993863619!2d34.4341519!3d31.503032800000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1608079134391!5m2!1sen!2s"
          width="600"
          height="450"
          frameborder="0"
          style={{ border: "0" }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </S.Wrapper>
  );
}
