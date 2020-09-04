FROM registry.access.redhat.com/rhscl/httpd-24-rhel7

USER root

RUN mkdir /tmp/src

COPY ./.s2i/bin /usr/libexec/s2i
COPY ./index.html /tmp/src

RUN chown -R 1001:0 /tmp/src && \
  chmod -R g+rwx /usr/libexec/s2i

RUN ["/usr/libexec/s2i/assemble"]

EXPOSE 8080
USER 1001
CMD ["/usr/libexec/s2i/run"]
